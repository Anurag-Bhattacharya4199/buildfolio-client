import { NavLink, useLocation, useParams } from "react-router-dom";
import "./PortfolioHeader.scss";
import { useEffect, useState } from "react";

function PortfolioHeader(props) {
  const { name } = props;
  let { id } = useParams();

  return (
    <nav className="headerNav">
      <NavLink to={`/${id}/user/portfolio`} className="headerNav__links">
        {name}
      </NavLink>
      <NavLink to={`/${id}/user`} className="headerNav__links">
        Dashboard
      </NavLink>
      <NavLink className="headerNav__links" to={`/${id}/user/portfolio/about`}>
        About
      </NavLink>
      <NavLink className="headerNav__links" to={`/${id}/user/portfolio/review`}>
        Reviews
      </NavLink>
    </nav>
  );
}

export default PortfolioHeader;
