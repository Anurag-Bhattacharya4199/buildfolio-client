import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SkillItem from "../SkillItem/SkillItem";
import "./SkillInfo.scss";
import { API_BASE_URL } from "../../utils/utils";

function SkillInfo() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasSkillLoaded, setHasSkillLoaded] = useState(false);
  const [skills, setSkills] = useState("");

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

  //If Skill Data is loaded then Skill Info is displayed
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
