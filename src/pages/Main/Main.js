import HeroImage from "../../assets/images/digitalportfolio.png";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/buildPortfolio");
  }
  return (
    <div>
      <img src={HeroImage} />
      <p>Short Paragraph introducing User to what this application does</p>
      <div>
        <button onClick={handleSubmit}>BUILD YOUR PORTFOLIO!</button>
      </div>
    </div>
  );
}

export default Main;
