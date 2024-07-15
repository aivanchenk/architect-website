import { Link } from "react-router-dom";

import logoImg from "../../assets/icons/logo-black.svg";
import logoText from "../../assets/icons/logo-text.svg";

import "./navbar.scss";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <div className="logo-wrapper">
          <img src={logoImg} />
          <img src={logoText} />
        </div>
      </Link>

      <ul className="menu-bar">
        <li className="menu-item">
          <Link to="/">Main</Link>
        </li>
        <li className="menu-item">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="menu-item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="menu-item">
          <Link to="/certificates">Certificates</Link>
        </li>
        <li className="menu-item">
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
