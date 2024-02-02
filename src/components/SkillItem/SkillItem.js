import "./SkillItem.scss";

function SkillItem(props) {
  const { skillName, profLvl } = props;
  return (
    <li className="skillItem">
      {skillName} : {profLvl}{" "}
    </li>
  );
}

export default SkillItem;
