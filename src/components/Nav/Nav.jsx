import { NavLink } from "react-router-dom";
import "./nav.css";

export const Nav = () => {
  const active = ({ isActive }) => isActive ? "nav__link-active" : "";

  return (
    <nav className="nav">
      <ul className="nav__items">
        <li className="nav__item">
          <NavLink className={active} to="/">
            Search
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className={active} to="/favorite">
            Favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
