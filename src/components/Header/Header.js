import Portfolio from "../../assets/icons/portfolio.svg";
import "./Header.scss";
import MainNavBar from "../MainNavBar/MainNavBar";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  return (
    <section className="header">
      <div className="header__content">
        <h1 className="header__title">Buildfolio</h1>
        <img src={Portfolio} alt="website_logo" className="header__logo" />
      </div>
      <MainNavBar />
    </section>
  );
}

export default Header;
