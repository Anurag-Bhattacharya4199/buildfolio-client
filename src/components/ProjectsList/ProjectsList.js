import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Project from "../Projects/Projects";
import { API_BASE_URL } from "../../utils/utils";

function ProjectLists() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasProjectLoaded, setHasProjectLoaded] = useState(false);
  const [projects, setProjects] = useState("");

  //Fetch Project Details for specific User
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

  //Use Effect to Fetch Call
  useEffect(() => {
    fetchProjectDetails();
  }, []);

  //If Project data is loaded, the Project section is loaded
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
