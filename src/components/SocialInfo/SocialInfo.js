import LinkedInIcon from "../../assets/icons/linkedin.svg";
import GitHubIcon from "../../assets/icons/github.svg";
import "./SocialInfo.scss";

function SocialInfo(props) {
  const { linkedIn, github } = props;

  return (
    <div className="socialInfo">
      <h1 className="socialInfo__title">Social Accounts:</h1>
      <div className="socialInfo__socialLinks">
        <a href={linkedIn} target="_blank" rel="noreferrer">
          <img src={LinkedInIcon} alt="linkedIn Icon" />
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <img src={GitHubIcon} alt="github Icon" />
        </a>
      </div>
    </div>
  );
}

export default SocialInfo;
