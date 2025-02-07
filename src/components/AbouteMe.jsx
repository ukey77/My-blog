import React, {useState, useEffect} from "react";
import "../styles/AbouteMe.scss"

const AboutMe = () => {
    return (
      <section className="aboutMe-wrapper">
        {/* <div className="aboutMe-header"> */}
          <h2 className="aboutMe-title">ABOUT ME</h2>
        {/* </div> */}
        <section className="aboutMe-content">
          <article className="aboutMe-image-area">
            <div className="aboutMe-image"></div>
          </article>
          <article className="aboutMe-text-area">
            <h2>I capture your extraordinary everyday moments</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur justo lorem, donec tempus. Vivamus et odio eu mi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur justo lorem, donec tempus. Vivamus et odio eu mi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur justo lorem, donec tempus. Vivamus et odio eu mi.
            </p>
          </article>
        </section>
      </section>
    );
  };
  

export default AboutMe;