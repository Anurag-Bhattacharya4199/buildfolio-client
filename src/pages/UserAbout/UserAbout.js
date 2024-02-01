import { useParams } from "react-router-dom";
import PortfolioHeader from "../../components/PortfolioHeader/PortfolioHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import UserEducationList from "../../components/UserEducationList/UserEducationList";
import UserWorkExpList from "../../components/UserWorkExpList/UserWorkExpList";
import UserSkillList from "../../components/UserSkillList/UserSkillList";
import "./UserAbout.scss";

function UserAbout() {
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
  return (
    <section>
      {hasLoaded && <PortfolioHeader name={user.user_name} />}
      <p>{user.user_summary}</p>
      <div>
        <UserEducationList />
        <UserWorkExpList />
        <UserSkillList />
      </div>
    </section>
  );
}

export default UserAbout;
