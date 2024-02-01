import { useParams } from "react-router-dom";
import PortfolioHeader from "../../components/PortfolioHeader/PortfolioHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import UserReviewList from "../../components/UserReviewList/UserReviewList";

function UserReviews() {
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
    <>
      <PortfolioHeader name={user.user_name} />
      <UserReviewList />
    </>
  );
}

export default UserReviews;
