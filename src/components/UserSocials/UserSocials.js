import LinkedInIcon from "../../assets/icons/linkedin.svg";
import GitHubIcon from "../../assets/icons/github.svg";
import "./UserSocials.scss";

function UserSocials(props) {
  const { linkedIn, github } = props;

  return (
    <div>
      <h1>Social Accounts:</h1>
      <div className="socialAccountLinks">
        <a href={linkedIn} target="_blank" rel="noreferrer">
          <img src={LinkedInIcon} />
        </a>
        <a href={github} target="_blank" rel="noreferred">
          <img src={GitHubIcon} />
        </a>
      </div>
    </div>
  );
}

export default UserSocials;
