import HeroImage from "../../assets/images/digitalportfolio.png";
import { useNavigate } from "react-router-dom";
import "./Main.scss";

function Main() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/buildUser");
  }
  return (
    <section className="mainContent">
      <div className="mainContent__hero">
        <img
          src={HeroImage}
          alt="Hero Pic"
          className="mainContent__heroImage"
        />
        <p>
          In this project, Users will be able to create a User Account for
          themselves which includes inputting their basic information. They will
          then be able to add their education, work history, skill set, projects
          list and reviews.
        </p>
        <p>
          Using all this information of the User, A template Portfolio Web Page
          with multiple tabs will be created for user viewing and sharing
        </p>
      </div>
      <div>
        <button onClick={handleSubmit}>Let's Build your User!</button>
      </div>
    </section>
  );
}

export default Main;
