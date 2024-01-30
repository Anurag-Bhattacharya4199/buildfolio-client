function UserProject(props) {
  const { projectName, desc, link } = props;

  return (
    <ul>
      <li>
        <a href={link} target="_blank" rel="noreferrer">
          {projectName}
        </a>
        <p>{desc}</p>
      </li>
    </ul>
  );
}

export default UserProject;
