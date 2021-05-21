import driveCapital from "../../images/driveCapital.svg";
import LACV from "../../images/LACV.svg";
import kleinerPerkins from "../../images/kleinerPerkins.svg";
import georgianPartners from "../../images/georgianPartners.svg";
import "./investors.scss";

const Investors = () => {
  return (
    <section className="investors">
      <h1 className="section-title">Our Investors</h1>
      <div className="title-bar black" />
      <ul className="investors__list">
        <li>
          <img src={driveCapital} alt="Drive Capital" />
        </li>
        <li>
          <img src={LACV} alt="Lewis and Clark Ventures" />
        </li>
        <li>
          <img src={kleinerPerkins} alt="Kleiner Perkins" />
        </li>
        <li>
          <img src={georgianPartners} alt="Georgian Partners" />
        </li>
      </ul>
    </section>
  );
};

export default Investors;
