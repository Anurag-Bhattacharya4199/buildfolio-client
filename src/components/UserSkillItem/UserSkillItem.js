function UserSkillItem(props) {
  const { skillName, profLvl } = props;

  return (
    <ul>
      <li>
        <span>
          {skillName}: {profLvl}
        </span>
      </li>
    </ul>
  );
}

export default UserSkillItem;
