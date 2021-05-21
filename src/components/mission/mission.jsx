import React, { useState, useEffect } from "react";
import brush2 from "../../images/brush2.png";
import glasses2 from "../../images/glasses2.png";
import VideoPlayer from "../../images/VideoPlayer.svg";
import "./mission.scss";

const Mission = () => {
  const [video, setVideo] = useState(null);

  const fetchURL =
    "https://vimeo.com/api/oembed.json?url=https://vimeo.com/327864855";
  const getVideo = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getVideo().then((video) => setVideo(video));
  }, []);

  return (
    <section className="mission">
      <h1 className="top-title">
        Dental benefits that reward you for brushing your teeth.
      </h1>
      {/* maybe use react-html-parser */}
      <div
        dangerouslySetInnerHTML={{ __html: `${video?.html}` }}
        className="video-container"
      />
      <img src={VideoPlayer} alt="Player" className="vp" />
      <img src={brush2} alt="Beam Brush" className="brush" />
      <h1 className="section-title">Our Mission &amp; Vision</h1>
      <div className="title-bar" />
      <p className="mission-statement ms1">
        Beam Dental was founded on the idea that everyone deserves access to
        dental care, centering our mission around closing the gap of the 100
        million Americans who don't. By blending innovative technology with
        traditional insurance policies, we've been able to bring incredible
        value to the employee benefits market—both disrupting insurance forever
        and delivering on our mission.{" "}
      </p>
      <p className="mission-statement ms2">
        {" "}
        Beam’s vision is to deliver a fundamentally unique approach to coverage
        by incorporating dental hygiene behavior into policy pricing at renewal.
      </p>
      <img src={glasses2} alt="Glasses" className="glasses" />
    </section>
  );
};

export default Mission;
