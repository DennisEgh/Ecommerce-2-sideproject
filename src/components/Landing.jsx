import React from "react";
import video from "../assets/landingpagevid.mp4"


const Landing = () => {
  return (
    <section id="landing">
   
    <video autoPlay muted loop id="landingvideo">
      <source src={video} type="video/mp4"></source>
      Your browser does not support the video tag.
    </video>
      <header>
      
      </header>
    </section>
  );
};

export default Landing;
