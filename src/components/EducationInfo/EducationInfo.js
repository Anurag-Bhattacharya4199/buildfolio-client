import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EducationItem from "../EducationItem/EducationItem";
import "./EducationInfo.scss";
import { API_BASE_URL } from "../../utils/utils";

function EducationInfo() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasEdLoaded, setHasEdLoaded] = useState(false);
  const [educations, setEducations] = useState("");

  //Fetch Education Details for Specific User
  const fetchEducationDetails = async () => {
    await axios
      .get(`${API_BASE_URL}/users/${id}/educations`)
      .then((res) => {
        setEducations(res.data);
        setHasEdLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  //Use Effect to call Fetch Call
  useEffect(() => {
    fetchEducationDetails();
  }, []);

  //If Education Data loaded, contents of Education List displayed
  if (!hasEdLoaded) {
    return null;
  } else {
    return (
      <section className="educationInfo">
        <h2 className="educationInfo__title">Education Info:</h2>
        <div>
          {educations.map((education) => {
            return (
              <EducationItem
                key={education.edId}
                schoolName={education.school_name}
                certName={education.certification_name}
                gradDate={education.graduation_date}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default EducationInfo;
