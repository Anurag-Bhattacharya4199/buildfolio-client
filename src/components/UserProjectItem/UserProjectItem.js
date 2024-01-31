import ProjectPic from "../../assets/images/project-pic.webp";
import "./UserProjectItem.scss";

function UserProjectItem(props) {
  const { projectName, desc, link } = props;

  return (
    <ul className="projectList">
      <li className="projectList__item">
        <div>
          <p>{projectName}</p>
          <p>{desc}</p>
          <a href={link} target="_blank" rel="noreferrer">
            Project Link
          </a>
        </div>
        <img src={ProjectPic} />
      </li>
    </ul>
  );
}

export default UserProjectItem;
