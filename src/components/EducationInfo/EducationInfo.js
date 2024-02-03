import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EducationItem from "../EducationItem/EducationItem";
import "./EducationInfo.scss";

function EducationInfo() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasEdLoaded, setHasEdLoaded] = useState(false);
  const [educations, setEducations] = useState("");

  const fetchEducationDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/educations`)
      .then((res) => {
        setEducations(res.data);
        setHasEdLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    fetchEducationDetails();
  }, []);

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
