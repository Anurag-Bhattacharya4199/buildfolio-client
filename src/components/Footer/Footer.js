import LinkedInIcon from "../../assets/icons/linkedin.svg";
import GitHubIcon from "../../assets/icons/github.svg";
import "./Footer.scss";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__content">
        <p>© 2023 Anurag Bhattacharya</p>
        <div className="footer__icons">
          <a
            href="https://www.linkedin.com/in/anurag-bhattacharya/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn Logo" />
          </a>
          <a
            href="https://github.com/Anurag-Bhattacharya4199"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub Logo" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
