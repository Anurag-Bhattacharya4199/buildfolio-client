import { useNavigate, useParams } from "react-router-dom";
import "./UserWorkExpForm.scss";
import { useState } from "react";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import axios from "axios";

function UserWorkExpForm() {
  let { id } = useParams();
  const [workTitle, setWorkTitle] = useState("");
  const [company, setCompany] = useState("");
  const [desc, setDesc] = useState("");
  const [startDate, setStartDate] = useState("");

  const [error, setError] = useState({
    workTitleError: false,
    companyError: false,
    descError: false,
    startDateError: false,
  });

  const navigate = useNavigate();

  function handleCancel() {
    alert("Work Experience is not added");
    navigate(`/${id}/user`);
  }

  const handleChangeWorkTitle = (event) => {
    const workTitle = event.target.value;
    setWorkTitle(workTitle);
  };

  const handleChangeCompany = (event) => {
    const company = event.target.value;
    setCompany(company);
  };

  const handleChangeDesc = (event) => {
    const desc = event.target.value;
    setDesc(desc);
  };

  const handleChangeStartDate = (event) => {
    const startDate = event.target.value;
    setStartDate(startDate);
  };

  const postWorkExp = async (workTitle, company, desc, startDate) => {
    const newWorkExp = {
      user_id: id,
      work_title: workTitle,
      company_name: company,
      work_desc: desc,
      start_date: startDate,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/workExperiences",
        newWorkExp
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  const isFormValid = () => {
    let formComplete = true;

    let errorState = {
      workTitleError: false,
      companyError: false,
      descError: false,
      startDateError: false,
    };

    if (workTitle.length === 0) {
      errorState.workTitleError = true;
      formComplete = false;
    }

    if (company.length === 0) {
      errorState.companyError = true;
      formComplete = false;
    }

    if (desc.length === 0) {
      errorState.descError = true;
      formComplete = false;
    }

    if (startDate.length === 0) {
      errorState.startDateError = true;
      formComplete = false;
    }

    setError(errorState);

    return formComplete;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isFormValid()) {
      setWorkTitle("Work Title");
      setCompany("Company");
      setDesc("Description of Work");
      setStartDate("");
      await postWorkExp(workTitle, company, desc, startDate);
      alert("Work Experience added");
      navigate(`/${id}/user`);
    }
  };

  return (
    <section className="userWorkExp">
      <h1 className="userWorkExp__title">Work History:</h1>
      <form className="userWorkExp__form" onSubmit={handleSubmit}>
        <div className="userWorkExp__form-work_title">
          <label>Work Title:</label>
          <input
            className={`${
              error.workTitleError ? "userWorkExp__form-invalidInput" : ""
            }`}
            placeholder="Work Title"
            name="workTitle"
            form="workTitle"
            value={workTitle}
            onChange={handleChangeWorkTitle}
          />
          <span
            className={`userWorkExp__form-errorMsg ${
              error.workTitleError
                ? "userWorkExp__form-errorMsgInvalidInput"
                : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userWorkExp__form-company">
          <label>Company:</label>
          <input
            className={`${
              error.companyError ? "userWorkExp__form-invalidInput" : ""
            }`}
            placeholder="Company"
            name="company"
            form="company"
            value={company}
            onChange={handleChangeCompany}
          />
          <span
            className={`userWorkExp__form-errorMsg ${
              error.companyError ? "userWorkExp__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userWorkExp__form-desc">
          <label>Description:</label>
          <textarea
            className={`${
              error.descError ? "userWorkExp__form-invalidInput" : ""
            }`}
            placeholder="Description of Work"
            name="desc"
            form="desc"
            value={desc}
            onChange={handleChangeDesc}
          />
          <span
            className={`userWorkExp__form-errorMsg ${
              error.descError ? "userWorkExp__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userWorkExp__form-start_date">
          <label>Start Date:</label>
          <input
            type="date"
            className={`${
              error.startDateError ? "userWorkExp__form-invalidInput" : ""
            }`}
            placeholder="Start Date"
            name="startDate"
            form="startDate"
            value={startDate}
            onChange={handleChangeStartDate}
          />
          <span
            className={`userWorkExp__form-errorMsg ${
              error.startDateError
                ? "userWorkExp__form-errorMsgInvalidInput"
                : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userWorkExp__form-buttons">
          <button>Add Work Experience</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </section>
  );
}

export default UserWorkExpForm;
