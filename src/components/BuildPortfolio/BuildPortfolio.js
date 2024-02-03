import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BuildPortfolio.scss";

function BuildPortfolio() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [educations, setEducations] = useState("");
  const [hasEducationLoaded, setHasEducationLoaded] = useState(false);

  const [projects, setProjects] = useState("");
  const [hasProjectLoaded, setHasProjectLoaded] = useState(false);

  const [works, setWorks] = useState("");
  const [hasWorkLoaded, setHasWorkLoaded] = useState(false);

  const [skills, setSkills] = useState("");
  const [hasSkillLoaded, setHasSkillLoaded] = useState(false);

  const [refs, setRefs] = useState("");
  const [hasRefLoaded, setHasRefLoaded] = useState(false);

  const fetchEducationDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/educations`)
      .then((res) => {
        setEducations(res.data);
        setHasEducationLoaded(true);
      });
  };

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

  const fetchWorkDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/workExperiences`)
      .then((res) => {
        setWorks(res.data);
        setHasWorkLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const fetchSkillDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/skills`)
      .then((res) => {
        setSkills(res.data);
        setHasSkillLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const fetchRefDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/references`)
      .then((res) => {
        setRefs(res.data);
        setHasRefLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    fetchEducationDetails();
    fetchProjectDetails();
    fetchWorkDetails();
    fetchSkillDetails();
    fetchRefDetails();
  }, []);

  const goToPortfolio = () => {
    navigate(`/${id}/user/portfolio`);
  };

  if (
    hasEducationLoaded &&
    educations.length > 0 &&
    hasWorkLoaded &&
    works.length > 0 &&
    hasProjectLoaded &&
    projects.length > 0 &&
    hasSkillLoaded &&
    skills.length > 0 &&
    hasRefLoaded &&
    refs.length > 0
  ) {
    return (
      <div className="buildPortfolio">
        <button onClick={goToPortfolio} className="buildPortfolio__button">
          BUILD PORTFOLIO
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default BuildPortfolio;
