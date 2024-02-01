import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PortfolioHeader from "../../components/PortfolioHeader/PortfolioHeader";
import ProfilePic from "../../assets/images/profile-pic.jpg";
import "./UserPortfolio.scss";
import UserProjectList from "../../components/UserProjectList/UserProjectList";
import UserContactInfo from "../../components/UserContactInfo/UserContactInfo";
import UserSocials from "../../components/UserSocials/UserSocials";

function UserPortfolio() {
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
        <PortfolioHeader name={user.user_name} />
        <section>
          <img
            src={ProfilePic}
            alt="Generic Profile Picture"
            className="mainContent__profileImg"
          ></img>
          <p>{user.user_summary}</p>
        </section>
        <UserProjectList />
        <section>
          <UserContactInfo
            email={user.user_email}
            phoneNumber={user.user_phoneNum}
          />
          <UserSocials
            linkedIn={user.user_linkedIn}
            github={user.user_github}
          />
        </section>
      </>
    );
  }
}

export default UserPortfolio;
