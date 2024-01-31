import { NavLink, useParams } from "react-router-dom";
import "./PortfolioHeader.scss";

function PortfolioHeader(props) {
  const { name } = props;
  let { id } = useParams();

  return (
    <nav className="headerNav">
      <NavLink to={`/${id}/user/portfolio`} className="headerNav__links">
        {name}
      </NavLink>
      <NavLink className="headerNav__links">About</NavLink>
      <NavLink className="headerNav__links">Reviews</NavLink>
    </nav>
  );
}

export default PortfolioHeader;
