import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfilePic from "../../assets/images/profile-pic.jpg";
import "./BuildPortfolioContent.scss";
import ProjectLists from "../ProjectsList/ProjectsList";
import UserDashboard from "../UserDashboard/UserDashboard";
import ContactInfo from "../ContactInfo/ContactInfo";
import SocialInfo from "../SocialInfo/SocialInfo";

function BuildPortfolioContent() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [hasLoaded, setHasLoaded] = useState(false);
  const [users, setUsers] = useState("");

  const fetchUserDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}`)
      .then((response) => {
        setUsers(response.data);
        setHasLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

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
          {users.user_summary}
        </div>
        <ProjectLists />
        <div className="buildPortfolioContent__contactInfo">
          <ContactInfo
            email={users.user_email}
            phoneNum={users.user_phoneNum}
          />
          <SocialInfo
            linkedIn={users.user_linkedIn}
            github={users.user_github}
          />
        </div>
      </section>
    );
  }
}

export default BuildPortfolioContent;
