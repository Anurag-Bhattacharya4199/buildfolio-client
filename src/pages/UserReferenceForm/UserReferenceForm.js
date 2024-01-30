import { useNavigate, useParams } from "react-router-dom";
import "./UserReferenceForm.scss";
import { useState } from "react";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import axios from "axios";

function UserReferenceForm() {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [error, setError] = useState({
    nameError: false,
    commentError: false,
  });

  const navigate = useNavigate();

  function handleCancel() {
    alert("Reference is not added");
    navigate(`/${id}/user`);
  }

  const handleChangeName = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleChangeComment = (event) => {
    const comment = event.target.value;
    setComment(comment);
  };

  const postReference = async (name, comment) => {
    const newRef = {
      user_id: id,
      reference_name: name,
      reference_comment: comment,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/references",
        newRef
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  const isFormValid = () => {
    let formComplete = true;

    let errorState = {
      nameError: false,
      commentError: false,
    };

    if (name.length === 0) {
      errorState.nameError = true;
      formComplete = false;
    }

    if (comment.length === 0) {
      errorState.commentError = true;
      formComplete = false;
    }

    setError(errorState);

    return formComplete;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isFormValid()) {
      setName("");
      setComment("");
      await postReference(name, comment);
      alert("Reference added");
      navigate(`/${id}/user`);
    }
  };
  return (
    <section className="userRef">
      <h1 className="userRef__title">References:</h1>
      <form className="userRef__form" onSubmit={handleSubmit}>
        <div className="userRef__form-name">
          <label>Name:</label>
          <input
            className={`${error.nameError ? "userRef__form-invalidInput" : ""}`}
            placeholder="Name"
            name="refName"
            form="refName"
            value={name}
            onChange={handleChangeName}
          />
          <span
            className={`userRef__form-errorMsg ${
              error.nameError ? "userRef__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userRef__form-comment">
          <label>Comment:</label>
          <input
            className={`${
              error.commentError ? "userRef__form-invalidInput" : ""
            }`}
            placeholder="Comment"
            name="refComment"
            form="refComment"
            value={comment}
            onChange={handleChangeComment}
          />
          <span
            className={`userRef__form-errorMsg ${
              error.commentError ? "userRef__form-errorMsgInvalidInput" : ""
            }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field is required
          </span>
        </div>
        <div className="userRef__form-buttons">
          <button>Add Reference</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </section>
  );
}

export default UserReferenceForm;
