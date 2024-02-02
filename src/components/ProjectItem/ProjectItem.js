import "./ProjectItem.scss";

function ProjectItem(props) {
  const { projectName, desc, link } = props;

  return (
    <section className="projectContent">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="projectContent__link"
      >
        <h2>{projectName}</h2>
      </a>
      <p>{desc}</p>
    </section>
  );
}

export default ProjectItem;
