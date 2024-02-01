import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import "./UserEducationForm.scss";
import axios from "axios";

function UserEducationForm() {
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
        <div className="userEducation__form-schoolName">
          <label>School Name:</label>
          <input
            className={`userEducation__form-schoolNameInp ${
              error.schoolNameError ? "userForm__form-invalidInput" : ""
            }`}
            placeholder="School Name"
            name="schoolName"
            form="schoolName"
            value={schoolName}
            onChange={handleChangeSchoolName}
          />
          <span
            className={`userEducation__form-errorMsg ${
              error.schoolNameError
                ? "userEducation__form-errorMsgInvalidInput"
                : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userEducation__form-certName">
          <label>Certification Name:</label>
          <input
            className={`userEducation__form-certNameInp ${
              error.certNameError ? "userForm__form-invalidInput" : ""
            }`}
            placeholder="Certification Name"
            name="certName"
            form="certName"
            value={certName}
            onChange={handleChangeCertName}
          />
          <span
            className={`userEducation__form-errorMsg ${
              error.certNameError
                ? "userEducation__form-errorMsgInvalidInput"
                : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userEducation__form-gradDate">
          <label>Graduation Date:</label>
          <input
            type="date"
            className={`userEducation__form-gradDateInp ${
              error.gradDateError ? "userEducation__form-invalidInput" : ""
            }`}
            name="gradDate"
            form="gradDate"
            value={gradDate}
            onChange={handleChangeGradDate}
          />
          <span
            className={`userEducation__form-errorMsg ${
              error.gradDateError
                ? "userEducation__form-errorMsgInvalidInput"
                : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userEducation__form-buttons">
          <button className="userEducation__form-submit">Add Education</button>
          <button onClick={handleCancel} className="userEducation__form-cancel">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default UserEducationForm;
