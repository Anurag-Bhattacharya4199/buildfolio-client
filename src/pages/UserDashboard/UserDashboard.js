import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserDashboard.scss";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import GitHubIcon from "../../assets/icons/github.svg";

function UserDashboard() {
  let { id } = useParams();

  const [hasLoaded, setHasLoaded] = useState(false);
  const [user, setUser] = useState("");

  const fetchUserDetails = async () => {
    await axios.get(`http://localhost:8080/users/${id}`).then((response) => {
      setUser(response.data);
      setHasLoaded(true);
    });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (!hasLoaded) {
    return null;
  } else {
    return (
      <>
        <h1 className={`${user.user_primaryColor}`}>
          {user.user_name}'s Profile:
        </h1>
        <h2 className={`${user.user_secondaryColor}`}>Email Address</h2>
        <p>{user.user_email}</p>
        <h2 className={`${user.user_secondaryColor}`}>Phone Number</h2>
        <p>{user.user_phoneNum}</p>
        <h2 className={`${user.user_secondaryColor}`}>Summary:</h2>
        <p>{user.user_summary}</p>
        <h2 className={`${user.user_secondaryColor}`}>LinkedIn:</h2>
        <a href={`${user.user_linkedIn}`} target="_blank" rel="noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn Logo" />
        </a>
        <h2 className={`${user.user_secondaryColor}`}>GitHub:</h2>
        <a href={`${user.user_github}`} target="_blank" rel="noreferrer">
          <img src={GitHubIcon} alt="LinkedIn Logo" />
        </a>
      </>
    );
  }
}

export default UserDashboard;
