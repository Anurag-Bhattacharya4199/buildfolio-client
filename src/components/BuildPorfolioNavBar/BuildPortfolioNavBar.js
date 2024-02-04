import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import "./BuildPortfolioNavBar.scss";
import { API_BASE_URL } from "../../utils/utils";

function BuildPortfolioNavBar() {
  let { id } = useParams();
  let location = useLocation();

  const [hasLoaded, setHasLoaded] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  //Fetch User Details
  const fetchUserDetails = async () => {
    await axios
      .get(`${API_BASE_URL}/users/${id}`)
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

  //Portfolio Home Tab Styles
  const getPortfolioHomePageStyles = () => {
    const path = `/${id}/user/portfolio`;
    if (location.pathname === path) {
      return "active-home";
    }
  };

  //Portfolio About Tab Styles
  const getPortfolioAboutPageStyles = () => {
    if (location.pathname.includes("about")) {
      return "active-about";
    }
  };

  //Portfolio Reviews Tab Styles
  const getPortfolioReviewsPageStyles = () => {
    if (location.pathname.includes("reviews")) {
      return "active-reviews";
    }
  };

  //If Data loaded, Nav Bar is displayed
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
