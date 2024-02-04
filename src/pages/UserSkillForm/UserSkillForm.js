import { useNavigate, useParams } from "react-router-dom";
import "./UserSkillForm.scss";
import { useState } from "react";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import axios from "axios";

function UserSkillForm() {
  let { id } = useParams();
  const [skillName, setSkillName] = useState("");
  const [profLvl, setProfLvl] = useState("");

  const [error, setError] = useState({
    skillNameError: false,
    profLvlError: false,
  });

  const navigate = useNavigate();

  //Handle Cancel Button Function
  function handleCancel() {
    alert("Skill is not added");
    navigate(`/${id}/user`);
  }

  //Handle Input Change Function
  const handleChangeSkillName = (event) => {
    const skillName = event.target.value;
    setSkillName(skillName);
  };

  const handleChangeProfLvl = (event) => {
    const profLvl = event.target.value;
    setProfLvl(profLvl);
  };

  //Post Skill Function
  const postSkill = async (skillName, profLvl) => {
    const newSkill = {
      user_id: id,
      skill_name: skillName,
      skill_proficiencyLevel: profLvl,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/skills",
        newSkill
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  //Form Validation
  const isFormValid = () => {
    let formComplete = true;

    let errorState = {
      skillNameError: false,
      profLvlError: false,
    };

    if (skillName.length === 0) {
      errorState.skillNameError = true;
      formComplete = false;
    }

    if (profLvl.length === 0) {
      errorState.profLvlError = true;
      formComplete = false;
    }

    if (parseInt(profLvl) < 1 || parseInt(profLvl) > 5) {
      errorState.profLvlError = true;
      formComplete = false;
    }

    setError(errorState);

    return formComplete;
  };

  //Handle Submit Button Function
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isFormValid()) {
      setSkillName("");
      setProfLvl("");
      await postSkill(skillName, profLvl);
      alert("Skill added");
      navigate(`/${id}/user`);
    }
  };

  return (
    <section className="userSkill">
      <h1 className="userSkill__title">Top Skills:</h1>
      <form className="userSkill__form" onSubmit={handleSubmit}>
        <div className="userSkill__form-skillName">
          <label>Skill Name:</label>
          <input
            className={`userSkill__form-skillNameInp ${
              error.skillNameError ? "userSkill__form-invalidInput" : ""
            }`}
            placeholder="Skill Name"
            name="skillName"
            form="skillName"
            value={skillName}
            onChange={handleChangeSkillName}
          />
          <span
            className={`userSkill__form-errorMsg ${
              error.skillNameError ? "userSkill__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userSkill__form-profLvl">
          <label>Proficiency Level: (Rate Skill between 1 and 5)</label>
          <input
            className={`userSkill__form-profLvlInp ${
              error.profLvlError ? "userSkill__form-invalidInput" : ""
            }`}
            type="number"
            min={1}
            max={5}
            name="profLvl"
            form="profLvl"
            value={profLvl}
            onChange={handleChangeProfLvl}
          />
          <span
            className={`userSkill__form-errorMsg ${
              error.profLvlError ? "userSkill__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required / Number must be in range between 1 and 5
          </span>
        </div>
        <div className="userSkill__form-buttons">
          <button className="userSkill__form-submit">Add Skill</button>
          <button onClick={handleCancel} className="userSkill__form-cancel">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default UserSkillForm;
