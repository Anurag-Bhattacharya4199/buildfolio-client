import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BuildPortfolio.scss";
import { API_BASE_URL } from "../../utils/utils";

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

  //Fetch Education Details for Specific User
  const fetchEducationDetails = async () => {
    await axios
      .get(`${API_BASE_URL}/users/${id}/educations`)
      .then((res) => {
        setEducations(res.data);
        setHasEducationLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

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

  //Fetch Work Details for Specific User
  const fetchWorkDetails = async () => {
    await axios
      .get(`${API_BASE_URL}/users/${id}/workExperiences`)
      .then((res) => {
        setWorks(res.data);
        setHasWorkLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  //Fetch Skill Details for Specific User
  const fetchSkillDetails = async () => {
    await axios
      .get(`${API_BASE_URL}/users/${id}/skills`)
      .then((res) => {
        setSkills(res.data);
        setHasSkillLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  //Fetch Reference Details for Specific User
  const fetchRefDetails = async () => {
    await axios
      .get(`${API_BASE_URL}/users/${id}/references`)
      .then((res) => {
        setRefs(res.data);
        setHasRefLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  //Use Effect to call each Fetch Call
  useEffect(() => {
    fetchEducationDetails();
    fetchProjectDetails();
    fetchWorkDetails();
    fetchSkillDetails();
    fetchRefDetails();
  }, []);

  //Go to Portfolio Home Page
  const goToPortfolio = () => {
    navigate(`/${id}/user/portfolio`);
  };

  //If All Data and Data length is greater than 0 then Build Portfolio Button is displayed
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
