import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserProjectItem from "../UserProjectItem/UserProjectItem";

function UserProjectList() {
  let { id } = useParams();

  const [hasProjectLoaded, setHasProjectLoaded] = useState(false);
  const [project, setProject] = useState([]);

  const fetchProjectDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/projects`)
      .then((response) => {
        setProject(response.data);
        setHasProjectLoaded(true);
      });
  };

  useEffect(() => {
    fetchProjectDetails();
  }, []);

  if (!hasProjectLoaded) {
    return null;
  } else {
    return project.map((item) => {
      return (
        <UserProjectItem
          key={item.projectId}
          projectName={item.project_name}
          desc={item.project_desc}
          link={item.project_link}
        />
      );
    });
  }
}

export default UserProjectList;
