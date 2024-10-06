import MoniLogo from "assets/icons/svgs/MoniWizr_Logo.svg";
import "./navbar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light fixed">
        <div className="container-fluid py-2">
          <a className="navbar-brand" href="#">
            <img src={MoniLogo} alt="moniwizr" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
