import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfilePic from "../../assets/images/profile-pic.jpg";
import "./BuildPortfolioContent.scss";
import ProjectLists from "../ProjectsList/ProjectsList";
import UserDashboard from "../UserDashboard/UserDashboard";
import ContactInfo from "../ContactInfo/ContactInfo";
import SocialInfo from "../SocialInfo/SocialInfo";
import { API_BASE_URL } from "../../utils/utils";

function BuildPortfolioContent() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [hasLoaded, setHasLoaded] = useState(false);
  const [user, setUser] = useState("");

  //Fetch Specific User Details
  const fetchUserDetails = async () => {
    await axios
      .get(`${API_BASE_URL}/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setHasLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  //Use Effect to call Fetch Call
  useEffect(() => {
    fetchUserDetails();
  }, []);

  //If User Data has been loaded, the contents are displayed
  if (!hasLoaded) {
    return null;
  } else {
    return (
      <section className="buildPortfolioContent">
        <UserDashboard />
        <div className="buildPortfolioContent__imageContainer">
          <img
            src={ProfilePic}
            alt="profile-pic"
            className="buildPortfolioContent__image"
          />
        </div>
        <div className="buildPortfolioContent__summary">
          {user.user_summary}
        </div>
        <ProjectLists primColor={user.user_primaryColor} />
        <div className="buildPortfolioContent__contactInfo">
          <ContactInfo email={user.user_email} phoneNum={user.user_phoneNum} />
          <SocialInfo linkedIn={user.user_linkedIn} github={user.user_github} />
        </div>
      </section>
    );
  }
}

export default BuildPortfolioContent;
