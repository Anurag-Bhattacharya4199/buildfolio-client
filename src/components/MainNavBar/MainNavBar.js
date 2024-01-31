import { NavLink } from "react-router-dom";
import "./MainNavBar.scss";

function MainNavBar() {
  return (
    <nav className="navBar">
      <div>
        <NavLink to="/" className="navBar__link">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/buildUser" className="navBar__link">
          User Form
        </NavLink>
      </div>
    </nav>
  );
}

export default MainNavBar;
