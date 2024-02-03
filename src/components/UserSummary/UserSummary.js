import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UserSummary.scss";

function UserSummary() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [hasLoaded, setHasLoaded] = useState(false);
  const [summary, setSummary] = useState("");

  const fetchUserDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}`)
      .then((response) => {
        setSummary(response.data.user_summary);
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
      <section className="userSummary">
        <p className="userSummary__content">{summary}</p>
      </section>
    );
  }
}

export default UserSummary;
