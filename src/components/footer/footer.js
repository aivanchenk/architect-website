import { Link } from "react-router-dom";

import logoImg from "../../assets/icons/logo-white.svg";
import pointMapImg from "../../assets/icons/point-map.svg";
import phoneImg from "../../assets/icons/phone.svg";
import emailImg from "../../assets/icons/email.svg";
import facebookImg from "../../assets/icons/facebook.svg";
import twitterImg from "../../assets/icons/twitter.svg";
import linkedInImg from "../../assets/icons/linked-in.svg";

import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div class="footer-section">
        <Link to="/">
          <div className="logo-wrapper">
            <img src={logoImg} />
          </div>
        </Link>
        <div>
          <div className="header">Information</div>
          <ul className="footer-menu">
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
        </div>
        <div>
          <div className="header">Contacts</div>
          <div className="contacts-menu">
            <div className="menu-item">
              <img src={pointMapImg}></img> Students street 69,
              <br />
              51393, Kaunas, Lithuania
            </div>
            <div className="menu-item">
              <img src={phoneImg}></img>+37061198239
            </div>
            <div className="menu-item">
              <img src={emailImg}></img>a.ivanchenko.eu@gmail.com
            </div>
          </div>
        </div>
        <div>
          <div className="header">Social media</div>
          <div className="social-media-menu">
            <img src={facebookImg} />
            <img src={twitterImg} />
            <img src={linkedInImg} />
          </div>
        </div>
      </div>
      <div class="footer-section">
        <div>© 2024 Digital Project. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
