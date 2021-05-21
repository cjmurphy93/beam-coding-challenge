import footerLogo from "../../images/footerLogo.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <ul className="footer__lists">
        <li className="footer__list">
          <img src={footerLogo} alt="Footer Logo" />
        </li>
        <li className="footer__list">
          <h3 className="footer__list__title">Explore</h3>
          <ul className="footer__list__sub-list">
            <li>
              <a href="/">I'm a Broker</a>
            </li>
            <li>
              <a href="/">I'm a Member</a>
            </li>
            <li>
              <a href="/">I'm a Employer</a>
            </li>
            <li>
              <a href="/">I'm a Provider</a>
            </li>
          </ul>
        </li>
        <li className="footer__list">
          <h3 className="footer__list__title">Learn</h3>
          <ul className="footer__list__sub-list">
            <li>
              <a href="/">FAQs</a>
            </li>
            <li>
              <a href="/">Company Blog</a>
            </li>
            <li>
              <a href="/">Product Blog</a>
            </li>
          </ul>
        </li>
        <li className="footer__list">
          <h3 className="footer__list__title">Company</h3>
          <ul className="footer__list__sub-list">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
          </ul>
        </li>
        <li className="footer__list">
          <h3 className="footer__list__title">Resources</h3>
          <ul className="footer__list__sub-list">
            <li>
              <a href="/">Find a Dentist</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Get a Quote</a>
            </li>
            <li>
              <a href="/">Paper Claims</a>
            </li>
          </ul>
        </li>
        <li className="footer__list">
          <h3 className="footer__list__title">Connect</h3>
          <ul className="footer__list__sub-list">
            <li>
              <a href="/">LinkedIn</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
