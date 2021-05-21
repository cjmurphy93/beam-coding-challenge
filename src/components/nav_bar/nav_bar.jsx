import logo from "../../images/logo.svg";
import Arrow from "../../images/Arrow.svg";
import bars from "../../images/bars.svg";
import "./nav_bar.scss";

const NavBar = () => {
  return (
    <header>
      <div className="logo__container">
        <a href="/" className="logo__link">
          <img src={logo} className="nav__logo" alt="logo" />
        </a>
        <a href="/" className="bars_container">
          <img src={bars} alt="Open" className="bars" />
        </a>
      </div>

      <nav className="nav">
        {/* <div className="nav__right"> */}
        <ul className="nav__links">
          <li className="nav__link">
            <a href="/">
              Explore
              <img src={Arrow} alt="arrow" />
            </a>
          </li>
          <li className="nav__link">
            <a href="/">
              Company
              <img src={Arrow} alt="arrow" />
            </a>
          </li>
          <li className="nav__link">
            <a href="/">
              Resources
              <img src={Arrow} alt="arrow" />
            </a>
          </li>
          <li>
            <ul className="nav__buttons">
              <li>
                <a className="nav__button" href="/">
                  <span>Find a dentist</span>
                </a>
              </li>
              <li>
                <a className="nav__button nav__button--login" href="/">
                  <span>Login</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default NavBar;
