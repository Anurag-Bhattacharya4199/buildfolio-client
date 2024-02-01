import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserEducationItem from "../UserEducationItem/UserEducationItem";
import "./UserEducationList.scss";

function UserEducationList() {
  let { id } = useParams();
  const [hasEducationLoaded, setHasEducationLoeaded] = useState(false);
  const [education, setEducation] = useState([]);

  const fetchEducationDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/educations`)
      .then((response) => {
        setEducation(response.data);
        setHasEducationLoeaded(true);
      });
  };

  useEffect(() => {
    fetchEducationDetails();
  }, []);

  if (!hasEducationLoaded) {
    return null;
  } else {
    return (
      <section>
        <h1>Education History:</h1>
        {education.map((item) => {
          return (
            <UserEducationItem
              key={item.edId}
              schoolName={item.school_name}
              certName={item.certification_name}
              gradDate={item.graduation_date}
            />
          );
        })}
      </section>
    );
  }
}

export default UserEducationList;
