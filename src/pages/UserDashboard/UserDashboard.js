import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import "./UserDashboard.scss";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import GitHubIcon from "../../assets/icons/github.svg";
import Education from "../../assets/icons/education.svg";
import Project from "../../assets/icons/projects.svg";
import Work from "../../assets/icons/work.svg";
import Skill from "../../assets/icons/skills.svg";
import Reference from "../../assets/icons/references.svg";

function UserDashboard() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [hasLoaded, setHasLoaded] = useState(false);
  const [user, setUser] = useState("");

  const fetchUserDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}`)
      .then((response) => {
        setUser(response.data);
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
      <section className="userDashboard">
        <div className="userDashboard__mainTitle">
          <h1 className={`${user.user_primaryColor}`}>
            {user.user_name}'s Profile:
          </h1>
        </div>
        <div className="userDashboard__content">
          <div className="userDashboard__contacts">
            <h2 className={`${user.user_secondaryColor}`}>Email Address</h2>
            <p>{user.user_email}</p>
            <h2 className={`${user.user_secondaryColor}`}>Phone Number</h2>
            <p>{user.user_phoneNum}</p>
          </div>
          <div className="userDashboard__summary">
            <h2 className={`${user.user_secondaryColor}`}>Summary:</h2>
            <p>{user.user_summary}</p>
          </div>
          <div className="userDashboard__socialAccounts">
            <h2 className={`${user.user_secondaryColor}`}>
              {user.user_name}'s LinkedIn:
            </h2>
            <a href={`${user.user_linkedIn}`} target="_blank" rel="noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn Logo" />
            </a>
            <h2 className={`${user.user_secondaryColor}`}>
              {user.user_name}'s GitHub:
            </h2>
            <a href={`${user.user_github}`} target="_blank" rel="noreferrer">
              <img src={GitHubIcon} alt="LinkedIn Logo" />
            </a>
          </div>
        </div>
        <div className="userDashboard__buttons">
          <NavLink to={`/${id}/addEducation`}>
            <img src={Education} alt="Education-icon" />
          </NavLink>
          <NavLink to={`/${id}/addProject`}>
            <img src={Project} alt="Project-icon" />
          </NavLink>
          <NavLink to={`/${id}/addWork`}>
            <img src={Work} alt="Work-icon" />
          </NavLink>
          <NavLink to={`/${id}/addSkill`}>
            <img src={Skill} alt="Skill-icon" />
          </NavLink>
          <NavLink to={`/${id}/addReference`}>
            <img src={Reference} alt="Reference-icon" />
          </NavLink>
        </div>
      </section>
    );
  }
}

export default UserDashboard;
