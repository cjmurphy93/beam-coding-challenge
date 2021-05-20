import logo from "../../images/logo.svg";
import "./nav_bar.scss";

const NavBar = () => {
  return (
    <nav className="nav">
      {/* <div className="nav__content"> */}
      {/* <div className="nav__left"> */}
      <img src={logo} className="Nav-logo" alt="logo" />
      {/* </div> */}
      <div className="nav__right">
        <button className="nav__button">Home</button>
        <button className="nav__button">Blog</button>
        <button className="nav__button nav__button--about">About</button>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
