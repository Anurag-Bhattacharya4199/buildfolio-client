import { NavLink, useLocation } from "react-router-dom";
import "./MainNavBar.scss";

function MainNavBar() {
  let location = useLocation();

  const getHomePageStyles = () => {
    if (location.pathname === "/") {
      return "active-homePage";
    }
  };

  const getUserFormStyles = () => {
    if (location.pathname.includes("buildUser")) {
      return "active-userForm";
    }
  };

  return (
    <nav className="navBar">
      <NavLink to="/" className={`${getHomePageStyles()} navBar__links`}>
        Home
      </NavLink>
      <NavLink
        to="/buildUser"
        className={`${getUserFormStyles()} navBar__links`}
      >
        User Form
      </NavLink>
    </nav>
  );
}

export default MainNavBar;
