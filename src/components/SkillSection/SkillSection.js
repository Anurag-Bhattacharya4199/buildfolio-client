import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SkillItem from "../SkillItem/SkillItem";
import "./SkillSection.scss";
import { API_BASE_URL } from "../../utils/utils";

function SkillSection() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasSkillLoaded, setHasSkillLoaded] = useState(false);
  const [skills, setSkills] = useState("");
  const [showSkills, setShowSkills] = useState(false);

  //Fetch Skill Details for Specific User
  const fetchSkillDetails = async () => {
    await axios
      .get(`${API_BASE_URL}/users/${id}/skills`)
      .then((res) => {
        setSkills(res.data);
        setHasSkillLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  //Use Effect to Fetch Call
  useEffect(() => {
    fetchSkillDetails();
  }, []);

  //Load Skills Section
  const loadSkills = () => {
    setShowSkills(true);
  };

  //Hide Skills Section
  const hideSkills = () => {
    setShowSkills(false);
  };

  return (
    <section className="skillSection">
      {hasSkillLoaded && skills.length > 0 && (
        <section>
          <div className="skillSection__buttons">
            <button onClick={loadSkills} className="skillSection__buttons-show">
              Show Skills
            </button>
            <button onClick={hideSkills} className="skillSection__buttons-hide">
              Hide Skills
            </button>
          </div>
          <div className="skillSection__list">
            {showSkills &&
              skills.map((skill) => {
                return (
                  <SkillItem
                    key={skill.skillId}
                    skillName={skill.skill_name}
                    profLvl={skill.skill_proficiencyLevel}
                  />
                );
              })}
          </div>
        </section>
      )}
    </section>
  );
}

export default SkillSection;
