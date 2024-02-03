import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SkillItem from "../SkillItem/SkillItem";
import "./SkillSection.scss";

function SkillSection() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasSkillLoaded, setHasSkillLoaded] = useState(false);
  const [skills, setSkills] = useState("");
  const [showSkills, setShowSkills] = useState(false);

  const fetchSkillDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/skills`)
      .then((res) => {
        setSkills(res.data);
        setHasSkillLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    fetchSkillDetails();
  }, []);

  const loadSkills = () => {
    setShowSkills(true);
  };

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
