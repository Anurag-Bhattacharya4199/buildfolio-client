import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UserSummary.scss";
import { API_BASE_URL } from "../../utils/utils";

function UserSummary() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [hasLoaded, setHasLoaded] = useState(false);
  const [summary, setSummary] = useState("");

  //Fetch User Details for Specific User
  const fetchUserDetails = async () => {
    await axios
      .get(`${API_BASE_URL}/users/${id}`)
      .then((response) => {
        setSummary(response.data.user_summary);
        setHasLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  //Use Effect to Fetch Call
  useEffect(() => {
    fetchUserDetails();
  }, []);

  //If User Data is loaded, user summary is displayed
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
