import React, { useRef } from "react";
import logo from "../../images/logo.svg";
import Arrow from "../../images/Arrow.svg";
import bars from "../../images/bars.svg";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import "./nav_bar.scss";

const NavBar = () => {
  const dropdownRef = useRef(null);
  const [exploreActive, setExploreActive] = useDetectOutsideClick(
    dropdownRef,
    false
  );
  const [companyActive, setCompanyActive] = useDetectOutsideClick(
    dropdownRef,
    false
  );
  const [resourcesActive, setResourcesActive] = useDetectOutsideClick(
    dropdownRef,
    false
  );

  const clickExplore = () => {
    setExploreActive(!exploreActive);
    setCompanyActive(false);
    setResourcesActive(false);
  };

  const clickCompany = () => {
    setExploreActive(false);
    setCompanyActive(!companyActive);
    setResourcesActive(false);
  };

  const clickResources = () => {
    setExploreActive(false);
    setCompanyActive(false);
    setResourcesActive(!resourcesActive);
  };

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
        <ul className="nav__links">
          <li className="nav__link">
            <span onClick={clickExplore} className="nav__link__title">
              Explore
              <img
                src={Arrow}
                alt="arrow"
                className={`arrow ${exploreActive ? "up" : ""}`}
              />
            </span>
            <ul
              className={`nav__link__list ${exploreActive ? "active" : ""}`}
              ref={dropdownRef}
            >
              <li>
                <a href="/">I'm a Broker</a>
              </li>
              <li>
                <a href="/">I'm a Member</a>
              </li>
              <li>
                <a href="/">I'm an Employer</a>
              </li>
              <li>
                <a href="/">I'm a Provider</a>
              </li>
            </ul>
          </li>
          <li className="nav__link">
            <span onClick={clickCompany} className="nav__link__title">
              Company
              <img
                src={Arrow}
                alt="arrow"
                className={`arrow ${companyActive ? "up" : ""}`}
              />
            </span>
            <ul
              className={`nav__link__list ${companyActive ? "active" : ""}`}
              ref={dropdownRef}
            >
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
            </ul>
          </li>
          <li className="nav__link">
            <span onClick={clickResources} className="nav__link__title">
              Resources
              <img
                src={Arrow}
                alt="arrow"
                className={`arrow ${resourcesActive ? "up" : ""}`}
              />
            </span>
            <ul
              className={`nav__link__list ${resourcesActive ? "active" : ""}`}
              ref={dropdownRef}
            >
              <li>
                <a href="/">Shop</a>
              </li>
              <li>
                <a href="/">Claims</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
            </ul>
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
      </nav>
    </header>
  );
};

export default NavBar;
