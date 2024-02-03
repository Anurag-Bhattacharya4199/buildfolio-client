import ProjectImage from "../../assets/images/project-pic.webp";
import "./Projects.scss";

function Project(props) {
  const { projectName, desc, link } = props;

  return (
    <section className="projectItem">
      <div className="projectItem__content">
        <a href={link} target="_blank">
          <h2>{projectName}</h2>
        </a>
        <p>{desc}</p>
      </div>
      <img
        src={ProjectImage}
        alt="Project Icon"
        className="projectItem__image"
      />
    </section>
  );
}

export default Project;
