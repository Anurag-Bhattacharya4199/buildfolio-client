import { NavLink } from "react-router-dom";
import Portfolio from "../../assets/icons/portfolio.svg";

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Buildfolio</h1>
      <img src={Portfolio} alt="website_logo" className="header__logo" />
      <nav className="header_navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutProject">About Project</NavLink>
      </nav>
    </div>
  );
}

export default Header;
