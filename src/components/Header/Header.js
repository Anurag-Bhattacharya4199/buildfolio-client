import Portfolio from "../../assets/icons/portfolio.svg";
import "./Header.scss";
import MainNavBar from "../MainNavBar/MainNavBar";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <NavLink to="/" className="header__link">
        <div className="header__content">
          <h1 className="header__title">Buildfolio</h1>
          <img src={Portfolio} alt="website_logo" className="header__logo" />
        </div>
      </NavLink>
      <MainNavBar />
    </section>
  );
}

export default Header;
