import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import "./BuildPortfolioNavBar.scss";

function BuildPortfolioNavBar() {
  let { id } = useParams();
  let location = useLocation();

  const [hasLoaded, setHasLoaded] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const fetchUserDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}`)
      .then((response) => {
        setUserName(response.data.user_name);
        setHasLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const getPortfolioHomePageStyles = () => {
    const path = `/${id}/user/portfolio`;
    if (location.pathname === path) {
      return "active-home";
    }
  };

  const getPortfolioAboutPageStyles = () => {
    if (location.pathname.includes("about")) {
      return "active-about";
    }
  };

  const getPortfolioReviewsPageStyles = () => {
    if (location.pathname.includes("reviews")) {
      return "active-reviews";
    }
  };

  if (!hasLoaded) {
    return null;
  } else {
    return (
      <nav className="portfolioNavBar">
        <NavLink
          to={`/${id}/user/portfolio`}
          className={`${getPortfolioHomePageStyles()} portfolioNavBar__links`}
        >
          {userName}
        </NavLink>
        <NavLink
          to={`/${id}/user/portfolio/about`}
          className={`${getPortfolioAboutPageStyles()} portfolioNavBar__links`}
        >
          About
        </NavLink>
        <NavLink
          to={`/${id}/user/portfolio/reviews`}
          className={`${getPortfolioReviewsPageStyles()} portfolioNavBar__links`}
        >
          Reviews
        </NavLink>
      </nav>
    );
  }
}

export default BuildPortfolioNavBar;
