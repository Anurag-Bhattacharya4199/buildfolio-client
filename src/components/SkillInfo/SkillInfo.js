import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkillItem from "../SkillItem/SkillItem";
import "./SkillInfo.scss";

function SkillInfo() {
  let { id } = useParams();
  const [hasSkillLoaded, setHasSkillLoaded] = useState(false);
  const [skills, setSkills] = useState("");

  const fetchSkillDetails = async () => {
    await axios.get(`http://localhost:8080/users/${id}/skills`).then((res) => {
      setSkills(res.data);
      setHasSkillLoaded(true);
    });
  };

  useEffect(() => {
    fetchSkillDetails();
  }, []);

  if (!hasSkillLoaded) {
    return null;
  } else {
    return (
      <section className="skillInfo">
        <h2 className="skillInfo__title">Skills List:</h2>
        <div>
          {skills.map((skill) => {
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
    );
  }
}

export default SkillInfo;
