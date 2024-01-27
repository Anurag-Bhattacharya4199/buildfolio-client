import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import "./UserEducation.scss";
import axios from "axios";

function UserEducation() {
  let { id } = useParams();
  const [schoolName, setSchoolName] = useState("");
  const [certName, setCertName] = useState("");
  const [gradDate, setGradDate] = useState("");

  const [error, setError] = useState({
    schoolNameError: false,
    certNameError: false,
    gradDateError: false,
  });

  const navigate = useNavigate();

  function handleCancel() {
    alert("Education is not added");
    navigate(`/${id}/user`);
  }

  const handleChangeSchoolName = (event) => {
    const schoolName = event.target.value;
    setSchoolName(schoolName);
  };

  const handleChangeCertName = (event) => {
    const certName = event.target.value;
    setCertName(certName);
  };

  const handleChangeGradDate = (event) => {
    const gradDate = event.target.value;
    setGradDate(gradDate);
  };

  const postEducation = async (schoolName, certName, gradDate) => {
    const newEducation = {
      user_id: id,
      school_name: schoolName,
      certification_name: certName,
      graduation_date: gradDate,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/educations",
        newEducation
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  const isFormValid = () => {
    let formComplete = true;

    let errorState = {
      schoolNameError: false,
      certNameError: false,
      gradDateError: false,
    };

    if (schoolName.length === 0) {
      errorState.schoolNameError = true;
      formComplete = false;
    }

    if (certName.length === 0) {
      errorState.certNameError = true;
      formComplete = false;
    }

    if (gradDate.length === 0) {
      errorState.gradDateError = true;
      formComplete = false;
    }

    setError(errorState);

    return formComplete;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isFormValid()) {
      setSchoolName("School Name");
      setCertName("Cert Name");
      setGradDate("");
      await postEducation(schoolName, certName, gradDate);
      alert("Education added");
      navigate(`/${id}/user`);
    }
  };

  return (
    <section className="userEducation">
      <h1 className="userEducation__title">Education History:</h1>
      <form className="userEducation__form" onSubmit={handleSubmit}>
        <div className="userEducation__form-school_name">
          <label>School Name:</label>
          <input
            className={`${
              error.schoolNameError ? "userForm__form-invalidInput" : ""
            }`}
            placeholder="School Name"
            name="schoolName"
            form="schoolName"
            value={schoolName}
            onChange={handleChangeSchoolName}
          />
          <span
            className={`userForm__form-errorMsg ${
              error.schoolNameError ? "userForm__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userEducation__form-cert_name">
          <label>Certification Name:</label>
          <input
            className={`${
              error.certNameError ? "userForm__form-invalidInput" : ""
            }`}
            placeholder="Certification Name"
            name="certName"
            form="certName"
            value={certName}
            onChange={handleChangeCertName}
          />
          <span
            className={`userForm__form-errorMsg ${
              error.certNameError ? "userForm__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userEducation__form-grad_date">
          <label>Graduation Date:</label>
          <input
            type="date"
            className={`${
              error.gradDateError ? "userForm__form-invalidInput" : ""
            }`}
            name="gradDate"
            form="gradDate"
            value={gradDate}
            onChange={handleChangeGradDate}
          />
          <span
            className={`userForm__form-errorMsg ${
              error.gradDateError ? "userForm__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userEducation__form-buttons">
          <button>Add Education</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </section>
  );
}

export default UserEducation;
