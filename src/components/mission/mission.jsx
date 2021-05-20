import React, { useState, useEffect } from "react";

const Mission = () => {
  const [video, setVideo] = useState(null);

  const fetchURL =
    "https://vimeo.com/api/oembed.json?url=https://vimeo.com/327864855";
  const getVideo = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getVideo().then((video) => setVideo(video));
  }, []);

  return (
    <section>
      {/* maybe use react-html-parser */}
      <div dangerouslySetInnerHTML={{ __html: `${video?.html}` }} />
    </section>
  );
};

export default Mission;
