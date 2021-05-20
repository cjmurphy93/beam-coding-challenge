import React, { useState, useEffect } from "react";
import "./leadership.scss";
import "../mission/mission.scss";

const Leadership = () => {
  const [leadership, setLeadership] = useState(null);

  const fetchURL =
    "https://beamtech.github.io/marketing-kata-html/leadership-team.json";
  const getLeadership = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getLeadership().then((leadership) => setLeadership(leadership));
  }, []);

  return (
    <section className="leadership">
      <h1 className="mission-title">Our Leadership Team</h1>
      <div className="blue-bar" />

      <div className="leadership-grid">
        {leadership?.map((leader) => (
          <a
            href={leader.url}
            className="leader-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={leader.image} alt={leader.name} />
            <h3 className="leader-name">{leader.name}</h3>
            <h4 className="leader-title">{leader.title}</h4>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
