import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EducationItem from "../EducationItem/EducationItem";
import "./EducationSection.scss";
import { API_BASE_URL } from "../../utils/utils";

function EducationSection() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasEdLoaded, setHasEdLoaded] = useState(false);
  const [educations, setEducations] = useState("");
  const [showEducations, setShowEducations] = useState(false);

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

  //Loads the Education Items
  const loadEd = () => {
    setShowEducations(true);
  };

  //Hides the Education Items
  const hideEd = () => {
    setShowEducations(false);
  };

  return (
    <section className="educationSection">
      {hasEdLoaded && educations.length > 0 && (
        <section>
          <div className="educationSection__buttons">
            <button onClick={loadEd} className="educationSection__buttons-show">
              Show Education
            </button>
            <button onClick={hideEd} className="educationSection__buttons-hide">
              Hide Education
            </button>
          </div>
          <div className="educationSection__list">
            {showEducations &&
              educations.map((education) => {
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
      )}
    </section>
  );
}

export default EducationSection;
