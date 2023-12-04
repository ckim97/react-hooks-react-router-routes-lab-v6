import { NavLink } from "react-router-dom";
import "./NavBar.css";

/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/directors"
        className="nav-link"
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        className="nav-link"
      >
        Actors
      </NavLink>
    </nav>
  );
};

export default NavBar;