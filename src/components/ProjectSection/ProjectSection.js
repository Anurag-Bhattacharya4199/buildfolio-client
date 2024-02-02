import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectItem from "../ProjectItem/ProjectItem";
import "./ProjectSection.scss";

function ProjectSection() {
  let { id } = useParams();
  const [hasProjectLoaded, setHasProjectLoaded] = useState(false);
  const [projects, setProjects] = useState("");
  const [showProjects, setShowProjects] = useState(false);

  const fetchProjectDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/projects`)
      .then((res) => {
        setProjects(res.data);
        setHasProjectLoaded(true);
      });
  };

  useEffect(() => {
    fetchProjectDetails();
  }, []);

  const loadProjects = () => {
    setShowProjects(true);
  };

  const hideProjects = () => {
    setShowProjects(false);
  };

  return (
    <section className="projectSection">
      {hasProjectLoaded && projects.length > 0 && (
        <section>
          <div className="projectSection__buttons">
            <button
              onClick={loadProjects}
              className="projectSection__buttons-show"
            >
              Show Projects
            </button>
            <button
              onClick={hideProjects}
              className="projectSection__buttons-hide"
            >
              Hide Projects
            </button>
          </div>
          <div className="projectSection__list">
            {showProjects &&
              projects.map((project) => {
                return (
                  <ProjectItem
                    key={project.projectId}
                    projectName={project.project_name}
                    desc={project.project_desc}
                    link={project.project_link}
                  />
                );
              })}
          </div>
        </section>
      )}
    </section>
  );
}

export default ProjectSection;
