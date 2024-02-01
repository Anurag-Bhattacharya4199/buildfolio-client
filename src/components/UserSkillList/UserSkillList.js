import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserSkillItem from "../UserSkillItem/UserSkillItem";

function UserSkillList() {
  let { id } = useParams();
  const [hasSkillLoaded, setHasSkillLoaded] = useState(false);
  const [skill, setSkill] = useState([]);

  const fetchSkillDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/skills`)
      .then((response) => {
        setSkill(response.data);
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
      <section>
        <h1>Skill List:</h1>
        {skill.map((item) => {
          return (
            <UserSkillItem
              key={item.skillId}
              skillName={item.skill_name}
              profLvl={item.skill_proficiencyLevel}
            />
          );
        })}
      </section>
    );
  }
}

export default UserSkillList;
