import { useState } from "react";
import "./UserForm.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [summary, setSummary] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGitHub] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");

  const [error, setError] = useState({
    nameError: false,
    emailError: false,
    phoneNumError: false,
    summaryError: false,
    linkedinError: false,
    githubError: false,
    primaryColorError: false,
    secondaryColorError: false,
  });

  const navigate = useNavigate();

  function handleCancel() {
    alert("User is not created");
    navigate("/");
  }

  const handleChangeName = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handleChangePhoneNum = (event) => {
    const phoneNum = event.target.value;
    setPhoneNum(phoneNum);
  };

  const handleChangeSummary = (event) => {
    const summary = event.target.value;
    setSummary(summary);
  };

  const handleChangeLinkedIn = (event) => {
    const linkedIn = event.target.value;
    setLinkedin(linkedIn);
  };

  const handleChangeGitHub = (event) => {
    const github = event.target.value;
    setGitHub(github);
  };

  const handleChangePrimaryColor = (event) => {
    const primaryColor = event.target.value;
    setPrimaryColor(primaryColor);
  };

  const handleChangeSecondaryColor = (event) => {
    const secondaryColor = event.target.value;
    setSecondaryColor(secondaryColor);
  };

  const postUser = async (name, email, phoneNum, summary, linkedin, github) => {
    const newUser = {
      user_name: name,
      user_email: email,
      user_phoneNum: phoneNum,
      user_summary: summary,
      user_linkedin: linkedin,
      user_github: github,
      user_primaryColor: primaryColor,
      user_secondaryColor: secondaryColor,
    };

    try {
      axios.post("http://localhost:8080/users", newUser, {
        "Content-Type": "application/json",
      });
    } catch (e) {
      console.log(e);
    }
  };

  const isFormValid = () => {
    let formComplete = true;

    let errorState = {
      nameError: false,
      emailError: false,
      phoneNumError: false,
      summaryError: false,
      linkedinError: false,
      githubError: false,
      primaryColorError: false,
      secondaryColorError: false,
    };

    if (name.length === 0) {
      errorState.nameError = true;
      formComplete = false;
    }

    if (email.length === 0) {
      errorState.emailError = true;
      formComplete = false;
    }

    if (phoneNum.length === 0) {
      errorState.phoneNumError = true;
      formComplete = false;
    }

    if (summary.length === 0) {
      errorState.summaryError = true;
      formComplete = false;
    }

    if (linkedin.length === 0) {
      errorState.linkedinError = true;
      formComplete = false;
    }

    if (github.length === 0) {
      errorState.githubError = true;
      formComplete = false;
    }

    if (primaryColor.length === 0) {
      errorState.primaryColorError = true;
      formComplete = false;
    }

    if (secondaryColor.length === 0) {
      errorState.secondaryColorError = true;
      formComplete = false;
    }

    setError(errorState);

    return formComplete;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      setName("");
      setEmail("");
      setPhoneNum("");
      setSummary("");
      setLinkedin("");
      setGitHub("");
      setPrimaryColor("Please Select");
      setSecondaryColor("Please Select");
      postUser(
        name,
        email,
        phoneNum,
        summary,
        linkedin,
        github,
        primaryColor,
        secondaryColor
      );
      alert("User added");
    }
  };

  return (
    <section className="userForm">
      <h1 className="userForm__title">Basic Information:</h1>
      <form className="userForm__form" onSubmit={handleSubmit}>
        <div className="userForm__form-name">
          <label>Name:</label>
          <input
            placeholder="Name"
            name="name"
            form="name"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="userForm__form-email">
          <label>Email Address:</label>
          <input
            placeholder="Email"
            name="email"
            form="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="userForm__form-phoneNum">
          <label>Phone Number:</label>
          <input
            placeholder="Phone Number"
            name="phoneNum"
            form="phoneNum"
            value={phoneNum}
            onChange={handleChangePhoneNum}
          />
        </div>
        <div className="userForm__form-summary">
          <label>Summary:</label>
          <textarea
            placeholder="Summary"
            name="summary"
            form="summary"
            value={summary}
            onChange={handleChangeSummary}
          />
        </div>
        <div className="userForm__form-linkedin">
          <label>LinkedIn Link:</label>
          <input
            placeholder="linkedIn"
            name="linkedIn"
            form="linkedIn"
            value={linkedin}
            onChange={handleChangeLinkedIn}
          />
        </div>
        <div className="userForm__form-github">
          <label>GitHub Link:</label>
          <input
            placeholder="github"
            name="github"
            form="github"
            value={github}
            onChange={handleChangeGitHub}
          />
        </div>
        <div className="userForm__form-primaryColor">
          <label>Primary Color:</label>
          <select
            placeholder="Please Select"
            name="primaryColor"
            form="primaryColor"
            value={primaryColor}
            onChange={handleChangePrimaryColor}
          >
            <option value="Please Select">Please Select</option>
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Indigo">Indigo</option>
            <option value="Violet">Violet</option>
          </select>
        </div>
        <div className="userForm__form-secondaryColor">
          <label>Secondary Color:</label>
          <select
            placeholder="Please Select"
            name="secondaryColor"
            form="secondaryColor"
            value={secondaryColor}
            onChange={handleChangeSecondaryColor}
          >
            <option value="Please Select">Please Select</option>
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Indigo">Indigo</option>
            <option value="Violet">Violet</option>
          </select>
        </div>
        <div className="userForm__form-buttons">
          <button>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </section>
  );
}

export default UserForm;