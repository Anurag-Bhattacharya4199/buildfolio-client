import "./ProjectItem.scss";
import ProjectImage from "../../assets/images/project-pic.webp";

function ProjectItem(props) {
  const { projectName, desc, link } = props;

  return (
    <section className="projectContent">
      <table>
        <tr>
          <th>Project Name:</th>
          <th>Description:</th>
          <th>Project Image:</th>
        </tr>
        <tr>
          <a href={link} target="_blank" rel="noreferrer">
            <td>{projectName}</td>
          </a>
          <td>{desc}</td>
          <td>
            <img
              src={ProjectImage}
              alt="Project Icon"
              className="projectItem__image"
            />
          </td>
        </tr>
      </table>
    </section>
  );
}

export default ProjectItem;
