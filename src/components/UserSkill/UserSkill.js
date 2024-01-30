function UserSkill(props) {
  const { skillName, profLvl } = props;

  return (
    <ul>
      <li>
        {skillName} : {profLvl}
      </li>
    </ul>
  );
}

export default UserSkill;
