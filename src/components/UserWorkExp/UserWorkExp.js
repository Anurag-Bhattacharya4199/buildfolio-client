function UserWorkExp(props) {
  const { workTitle, company, desc, startDate } = props;

  return (
    <ul>
      <li>
        <p>
          I worked at {company} as a {workTitle}, from {startDate}
        </p>
        <p>{desc}</p>
      </li>
    </ul>
  );
}

export default UserWorkExp;
