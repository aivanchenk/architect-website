import logoImg from "../../assets/images/logo.svg";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logoImg} />
      </div>
      <ul>
        <li>main</li>
        <li>gallery</li>
        <li>projects</li>
        <li>certificates</li>
        <li>contacts</li>
      </ul>
    </nav>
  );
}

export default Navbar;
