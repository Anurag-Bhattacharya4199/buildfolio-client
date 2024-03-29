import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectItem from "../ProjectItem/ProjectItem";
import "./ProjectSection.scss";
import { API_BASE_URL } from "../../utils/utils";

function ProjectSection() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasProjectLoaded, setHasProjectLoaded] = useState(false);
  const [projects, setProjects] = useState("");
  const [showProjects, setShowProjects] = useState(false);

  //Fetch Project Details for Specific User
  const fetchProjectDetails = async () => {
    await axios
      .get(`${API_BASE_URL}/users/${id}/projects`)
      .then((res) => {
        setProjects(res.data);
        setHasProjectLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  //Use Effect to call Fetch Call
  useEffect(() => {
    fetchProjectDetails();
  }, []);

  //Load Projects Section
  const loadProjects = () => {
    setShowProjects(true);
  };

  //Hide Projects Section
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
