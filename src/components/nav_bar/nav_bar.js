import logo from "../../images/logo.svg";
import "./nav_bar.scss";

const NavBar = () => {
  return (
    <nav className="nav">
      <img src={logo} className="nav__logo" alt="logo" />
      <div className="nav__right">
        <ul className="nav__links">
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
        <ul className="nav__buttons">
          <li>
            <a className="nav__button" href="#">
              <span>Find a dentist</span>
            </a>
          </li>
          <li>
            <a className="nav__button nav__button--login" href="#">
              <span>Login</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
