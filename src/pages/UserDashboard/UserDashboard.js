import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UserDashboard.scss";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import GitHubIcon from "../../assets/icons/github.svg";
import UserEducation from "../../components/UserEducation/UserEducation";
import UserWorkExp from "../../components/UserWorkExp/UserWorkExp";
import UserProject from "../../components/UserProject/UserProject";

function UserDashboard() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [hasLoaded, setHasLoaded] = useState(false);
  const [user, setUser] = useState("");

  const [hasEducationLoaded, setHasEducationLoeaded] = useState(false);
  const [education, setEducation] = useState([]);
  const [showEducation, setShowEducation] = useState(false);

  const [hasWorkExpLoaded, setHasWorkExpLoaded] = useState(false);
  const [workExp, setWorkExp] = useState([]);
  const [showWorkExp, setShowWorkExp] = useState(false);

  const [hasProjectLoaded, setHasProjectLoaded] = useState(false);
  const [project, setProject] = useState([]);
  const [showProject, setShowProject] = useState(false);

  const fetchUserDetails = async () => {
    await axios.get(`http://localhost:8080/users/${id}`).then((response) => {
      setUser(response.data);
      setHasLoaded(true);
    });
  };

  const fetchEducationDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/educations`)
      .then((response) => {
        setEducation(response.data);
        setHasEducationLoeaded(true);
      });
  };

  const fetchWorkExpDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/workExperiences`)
      .then((response) => {
        setWorkExp(response.data);
        setHasWorkExpLoaded(true);
      });
  };

  const fetchProjectDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/projects`)
      .then((response) => {
        setProject(response.data);
        setHasProjectLoaded(true);
      });
  };

  useEffect(() => {
    fetchUserDetails();
    fetchEducationDetails();
    fetchWorkExpDetails();
    fetchProjectDetails();
  }, []);

  const loadEducation = () => {
    setShowEducation(true);
  };

  const hideEducation = () => {
    setShowEducation(false);
  };

  const loadWorkExp = () => {
    setShowWorkExp(true);
  };

  const hideWorkExp = () => {
    setShowWorkExp(false);
  };

  const loadProject = () => {
    setShowProject(true);
  };

  const hideProject = () => {
    setShowProject(false);
  };

  const addEducation = () => {
    navigate(`/${id}/addEducation`);
  };

  const addWorkExperience = () => {
    navigate(`/${id}/addWorkExperience`);
  };

  const addProject = () => {
    navigate(`/${id}/addProject`);
  };
  if (!hasLoaded) {
    return null;
  } else {
    return (
      <section className="userDashboard">
        <div className="userDashboard__mainTitle">
          <h1 className={`${user.user_primaryColor}`}>
            {user.user_name}'s Profile:
          </h1>
        </div>
        <div className="userDashboard__contacts">
          <h2 className={`${user.user_secondaryColor}`}>Email Address</h2>
          <p>{user.user_email}</p>
          <h2 className={`${user.user_secondaryColor}`}>Phone Number</h2>
          <p>{user.user_phoneNum}</p>
        </div>
        <div className="userDashboard__summary">
          <h2 className={`${user.user_secondaryColor}`}>Summary:</h2>
          <p>{user.user_summary}</p>
        </div>
        <div className="userDashboard__socialAccounts">
          <h2 className={`${user.user_secondaryColor}`}>
            {user.user_name}'s LinkedIn:
          </h2>
          <a href={`${user.user_linkedIn}`} target="_blank" rel="noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn Logo" />
          </a>
          <h2 className={`${user.user_secondaryColor}`}>
            {user.user_name}'s GitHub:
          </h2>
          <a href={`${user.user_github}`} target="_blank" rel="noreferrer">
            <img src={GitHubIcon} alt="LinkedIn Logo" />
          </a>
        </div>
        <div className="userDashboard__buttons">
          <button onClick={addEducation}>Add Education</button>
          <button onClick={addWorkExperience}>Add Professional History</button>
          <button onClick={addProject}>Add Project</button>
          <button>Add Skills</button>
          <button>Add References</button>
        </div>
        {hasEducationLoaded && education.length > 0 && (
          <div className="userDashboard__buttons">
            <button onClick={loadEducation}>Show Education</button>
            <button onClick={hideEducation}>Hide Education</button>
            {showEducation &&
              education.map((ed) => {
                return (
                  <UserEducation
                    key={ed.edId}
                    school_name={ed.school_name}
                    cert_name={ed.certification_name}
                    grad_date={ed.graduation_date}
                  />
                );
              })}
          </div>
        )}
        {hasWorkExpLoaded && workExp.length > 0 && (
          <div className="userDashboard__buttons">
            <button onClick={loadWorkExp}>Show Work Experience</button>
            <button onClick={hideWorkExp}>Hide Work Experience</button>
            {showWorkExp &&
              workExp.map((work) => {
                return (
                  <UserWorkExp
                    key={work.workExpId}
                    workTitle={work.work_title}
                    company={work.company_name}
                    desc={work.work_desc}
                    startDate={work.start_date}
                  />
                );
              })}
          </div>
        )}
        {hasProjectLoaded && project.length > 0 && (
          <div className="userDashboard__buttons">
            <button onClick={loadProject}>Show Project</button>
            <button onClick={hideProject}>Hide Project</button>
            {showProject &&
              project.map((item) => {
                return (
                  <UserProject
                    key={item.projectId}
                    projectName={item.project_name}
                    desc={item.project_desc}
                    link={item.project_link}
                  />
                );
              })}
          </div>
        )}
        <div>
          <button>BUILD MY PORTFOLIO</button>
        </div>
      </section>
    );
  }
}

export default UserDashboard;
