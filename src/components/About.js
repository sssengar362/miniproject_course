import React, { useEffect } from "react";
const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div>
      <h1>We are Located in Satna (M.P.)</h1>
    </div>
  );
};
export default About;
