import { useState } from "react";
import "./UserForm.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import validator from "validator";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [summary, setSummary] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGitHub] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [maxCharacter, setMaxCharacter] = useState(10);

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

  //Auto Format Phone Number, Only Handles USA OR CANADA Phone Num Extension
  const handlePhoneNumberFormat = () => {
    const phoneNumArray = phoneNum.split("");

    //IF ONLY NUMBERS
    if (!phoneNumArray.includes("(" || ")" || "+" || " " || "0")) {
      setMaxCharacter(10);
      if (phoneNumArray.length === 10) {
        const formateNumber = `+1 (${phoneNumArray[0]}${phoneNumArray[1]}${phoneNumArray[2]}) ${phoneNumArray[3]}${phoneNumArray[4]}${phoneNumArray[5]}-${phoneNumArray[6]}${phoneNumArray[7]}${phoneNumArray[8]}${phoneNumArray[9]}`;
        setPhoneNum(formateNumber);
      }
      return;
    }

    //IF NON-NUMBER
    if (phoneNumArray.includes("(" || ")" || "+" || " " || "-")) {
      setMaxCharacter(17);
      return;
    }
  };

  //Handle Cancel Button Function
  function handleCancel() {
    alert("User is not created");
    navigate("/");
  }

  //Handle Input Change Functions
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

  //Post User Function
  const postUser = async (name, email, phoneNum, summary, linkedin, github) => {
    const newUser = {
      user_name: name,
      user_email: email,
      user_phoneNum: phoneNum,
      user_summary: summary,
      user_linkedIn: linkedin,
      user_github: github,
      user_primaryColor: primaryColor,
      user_secondaryColor: secondaryColor,
    };

    try {
      const response = await axios.post("http://localhost:8080/users", newUser);
      const [user] = response.data;
      const id = user.id;
      return id;
    } catch (e) {
      console.log(e);
    }
  };

  //Form Validation
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

    const phoneRegex = /\+1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/;
    //VALIDATE PHONE-NUMBER
    if (!phoneNum.match(phoneRegex)) {
      errorState.phoneNumError = true;
      formComplete = false;
    }

    //VALIDATE EMAIL
    if (!validator.isEmail(email)) {
      errorState.emailError = true;
      formComplete = false;
    }

    setError(errorState);

    return formComplete;
  };

  //Handle Submit Button Function
  const handleSubmit = async (event) => {
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
      let id = await postUser(
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
      navigate(`/${id}/user`);
    }
  };

  return (
    <section className="userForm">
      <h1 className="userForm__title">Basic Information:</h1>
      <form className="userForm__form" onSubmit={handleSubmit}>
        <div className="userForm__form-name">
          <label>Name:</label>
          <input
            className={`userForm__form-nameInp ${
              error.nameError ? "userForm__form-invalidInput" : ""
            }`}
            placeholder="Name"
            name="name"
            form="name"
            value={name}
            onChange={handleChangeName}
          />
          <span
            className={`userForm__form-errorMsg ${
              error.nameError ? "userForm__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userForm__form-email">
          <label>Email Address:</label>
          <input
            className={`userForm__form-emailInp ${
              error.emailError ? "userForm__form-invalidInput" : ""
            }`}
            placeholder="Email"
            name="email"
            form="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <span
            className={`userForm__form-errorMsg ${
              error.emailError ? "userForm__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required / Email must be in correct format
          </span>
        </div>
        <div className="userForm__form-phoneNum">
          <label>Phone Number:</label>
          <input
            className={`userForm__form-phoneNumInp ${
              error.phoneNumError ? "userForm__form-invalidInput" : ""
            }`}
            placeholder="Phone Number"
            maxLength={maxCharacter}
            name="phoneNum"
            form="phoneNum"
            value={phoneNum}
            onChange={handleChangePhoneNum}
            onKeyUp={() => {
              handlePhoneNumberFormat();
            }}
          />
          <span
            className={`userForm__form-errorMsg ${
              error.phoneNumError ? "userForm__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userForm__form-summary">
          <label>Summary:</label>
          <textarea
            className={` userForm__form-summaryInp ${
              error.summaryError ? "userForm__form-invalidInput" : ""
            }`}
            placeholder="Summary"
            name="summary"
            form="summary"
            value={summary}
            onChange={handleChangeSummary}
          />
          <span
            className={`userForm__form-errorMsg ${
              error.summaryError ? "userForm__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userForm__form-linkedin">
          <label>LinkedIn Link:</label>
          <input
            className={`userForm__form-linkedinInp ${
              error.linkedinError ? "userForm__form-invalidInput" : ""
            }`}
            placeholder="linkedIn"
            name="linkedIn"
            form="linkedIn"
            value={linkedin}
            onChange={handleChangeLinkedIn}
          />
          <span
            className={`userForm__form-errorMsg ${
              error.linkedinError ? "userForm__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userForm__form-github">
          <label>GitHub Link:</label>
          <input
            className={`userForm__form-gitHubInp ${
              error.githubError ? "userForm__form-invalidInput" : ""
            }`}
            placeholder="github"
            name="github"
            form="github"
            value={github}
            onChange={handleChangeGitHub}
          />
          <span
            className={`userForm__form-errorMsg ${
              error.githubError ? "userForm__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userForm__form-primaryColor">
          <label>Primary Color:</label>
          <select
            className={`userForm__form-primaryColorInp ${
              error.primaryColorError ? "userForm__form-invalidInput" : ""
            }`}
            placeholder="Please Select"
            name="primaryColor"
            form="primaryColor"
            value={primaryColor}
            onChange={handleChangePrimaryColor}
          >
            <option value="Please Select">Please Select</option>
            <option value="Red" className="userForm__form-selectRed">
              Red
            </option>
            <option value="Orange" className="userForm__form-selectOrange">
              Orange
            </option>
            <option value="Yellow" className="userForm__form-selectYellow">
              Yellow
            </option>
            <option value="Green" className="userForm__form-selectGreen">
              Green
            </option>
            <option value="Blue" className="userForm__form-selectBlue">
              Blue
            </option>
            <option value="Indigo" className="userForm__form-selectIndigo">
              Indigo
            </option>
            <option value="Violet" className="userForm__form-selectViolet">
              Violet
            </option>
          </select>
          <span
            className={`userForm__form-errorMsg ${
              error.primaryColorError
                ? "userForm__form-errorMsgInvalidInput"
                : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userForm__form-secondaryColor">
          <label>Secondary Color:</label>
          <select
            className={`userForm__form-secondaryColorInp ${
              error.secondaryColorError ? "userForm__form-invalidInput" : ""
            }`}
            placeholder="Please Select"
            name="secondaryColor"
            form="secondaryColor"
            value={secondaryColor}
            onChange={handleChangeSecondaryColor}
          >
            <option value="Please Select">Please Select</option>
            <option value="Red" className="userForm__form-selectRed">
              Red
            </option>
            <option value="Orange" className="userForm__form-selectOrange">
              Orange
            </option>
            <option value="Yellow" className="userForm__form-selectYellow">
              Yellow
            </option>
            <option value="Green" className="userForm__form-selectGreen">
              Green
            </option>
            <option value="Blue" className="userForm__form-selectBlue">
              Blue
            </option>
            <option value="Indigo" className="userForm__form-selectIndigo">
              Indigo
            </option>
            <option value="Violet" className="userForm__form-selectViolet">
              Violet
            </option>
          </select>
          <span
            className={`userForm__form-errorMsg ${
              error.secondaryColorError
                ? "userForm__form-errorMsgInvalidInput"
                : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userForm__form-buttons">
          <button className="userForm__form-submit">Submit</button>
          <button onClick={handleCancel} className="userForm__form-cancel">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default UserForm;
