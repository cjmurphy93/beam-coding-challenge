import React, { useState, useEffect } from "react";
import "./leadership.scss";

const Leadership = () => {
  const [leadership, setLeadership] = useState(null);
  const [hasError, setHasError] = useState(false);

  const fetchURL =
    "https://beamtech.github.io/marketing-kata-html/leadership-team.json";
  const getLeadership = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getLeadership()
      .then((leadership) => setLeadership(leadership))
      .catch((err) => setHasError(true));
  }, []);

  return (
    <section className="leadership">
      <h1 className="section-title">Our Leadership Team</h1>
      <div className="title-bar" />

      <div className="leadership-grid">
        {hasError ? (
          <div>We're sorry, but an error has occured loading the data.</div>
        ) : (
          leadership?.map((leader) => (
            <a
              href={leader.url}
              className="leader-profile"
              target="_blank"
              rel="noopener noreferrer"
              key={leader.name}
            >
              <img src={leader.image} alt={leader.name} />
              <h3 className="leader-name">{leader.name}</h3>
              <h4 className="leader-title">{leader.title}</h4>
            </a>
          ))
        )}
      </div>
    </section>
  );
};

export default Leadership;
