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

      <div className="menu-bar">
        <Link to="/" className="menu-item">
          Main
        </Link>
        <Link to="/gallery" className="menu-item">
          Gallery
        </Link>
        <Link to="/projects" className="menu-item">
          Projects
        </Link>
        <Link to="/certificates" className="menu-item">
          Certificates
        </Link>
        <Link to="/contacts" className="menu-item">
          Contacts
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
