import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Project from "../Projects/Projects";

function ProjectLists() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasProjectLoaded, setHasProjectLoaded] = useState(false);
  const [projects, setProjects] = useState("");

  const fetchProjectDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/projects`)
      .then((res) => {
        setProjects(res.data);
        setHasProjectLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    fetchProjectDetails();
  }, []);

  if (!hasProjectLoaded) {
    return null;
  } else {
    return projects.map((project) => {
      return (
        <Project
          key={project.projectId}
          projectName={project.project_name}
          desc={project.project_desc}
          link={project.project_link}
        />
      );
    });
  }
}

export default ProjectLists;
