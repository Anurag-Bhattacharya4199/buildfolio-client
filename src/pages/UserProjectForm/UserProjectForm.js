import { useNavigate, useParams } from "react-router-dom";
import "./UserProjectForm.scss";
import { useState } from "react";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import axios from "axios";

function UserProjectForm() {
  let { id } = useParams();
  const [projectName, setProjectName] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");

  const [error, setError] = useState({
    projectNameError: false,
    descError: false,
    linkError: false,
  });

  const navigate = useNavigate();

  function handleCancel() {
    alert("Project is not added");
    navigate(`/${id}/user`);
  }

  const handleChangeProjectName = (event) => {
    const projectName = event.target.value;
    setProjectName(projectName);
  };

  const handleChangeDesc = (event) => {
    const desc = event.target.value;
    setDesc(desc);
  };

  const handleChangeLink = (event) => {
    const link = event.target.value;
    setLink(link);
  };

  const postProject = async (projectName, desc, link) => {
    const newProject = {
      user_id: id,
      project_name: projectName,
      project_desc: desc,
      project_link: link,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/projects",
        newProject
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  const isFormValid = () => {
    let formComplete = true;

    let errorState = {
      projectNameError: false,
      descError: false,
      linkError: false,
    };

    if (projectName.length === 0) {
      errorState.projectNameError = true;
      formComplete = false;
    }

    if (desc.length === 0) {
      errorState.descError = true;
      formComplete = false;
    }

    if (link.length === 0) {
      errorState.linkError = true;
      formComplete = false;
    }

    setError(errorState);

    return formComplete;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isFormValid()) {
      setProjectName("");
      setDesc("");
      setLink("");
      await postProject(projectName, desc, link);
      alert("Project added");
      navigate(`/${id}/user`);
    }
  };

  return (
    <section className="userProject">
      <h1 className="userProject__title">Notable Projects:</h1>
      <form className="userProject__form" onSubmit={handleSubmit}>
        <div className="userProject__form-projectName">
          <label>Project Name:</label>
          <input
            className={`userProject__form-projectNameInp ${
              error.projectNameError ? "userProject__form-invalidInput" : ""
            }`}
            placeholder="Project Name"
            name="projectName"
            form="projectName"
            value={projectName}
            onChange={handleChangeProjectName}
          />
          <span
            className={`userProject__form-errorMsg ${
              error.projectNameError
                ? "userProject__form-errorMsgInvalidInput"
                : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userProject__form-desc">
          <label>Description:</label>
          <textarea
            className={`userProject__form-descInp ${
              error.descError ? "userProject__form-invalidInput" : ""
            }`}
            placeholder="Description of Project"
            name="desc"
            form="desc"
            value={desc}
            onChange={handleChangeDesc}
          />
          <span
            className={`userProject__form-errorMsg ${
              error.descError ? "userProject__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userProject__form-link">
          <label>Link:</label>
          <input
            className={`userProject__form-linkInp ${
              error.linkError ? "userProject__form-invalidInput" : ""
            }`}
            placeholder="Link of Project"
            name="link"
            form="link"
            value={link}
            onChange={handleChangeLink}
          />
          <span
            className={`userProject__form-errorMsg ${
              error.linkError ? "userProject__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userProject__form-buttons">
          <button className="userProject__form-submit">Add Project</button>
          <button onClick={handleCancel} className="userProject__form-cancel">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default UserProjectForm;
