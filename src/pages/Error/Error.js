import { useNavigate } from "react-router-dom";
import "./Error.scss";

function Error() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <section className="error">
      <p className="error__text">Error, You have reached a wrong page</p>
      <div className="error__buttonContainer">
        <button onClick={goToHomePage} className="error__button">
          Go to Home Page
        </button>
      </div>
    </section>
  );
}

export default Error;
