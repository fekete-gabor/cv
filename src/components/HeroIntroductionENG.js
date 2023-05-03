import React from "react";
import { HashLink } from "react-router-hash-link";

const HeroIntroductionENG = ({ refs }) => {
  const { containerRef, textRef, linkRef, circleRef } = refs;

  return (
    <>
      <div className="letter-container">
        <div className="letter">H</div>
        <div className="letter">i</div>
        <div className="letter comma">,</div>
        <div className="letter">I</div>
        <div className="letter">'</div>
        <div className="letter">m</div>
        <div className="letter comma"></div>
        <div className="main-letter">G</div>
        <div className="letter">á</div>
        <div className="letter">b</div>
        <div className="letter">o</div>
        <div className="letter">r</div>
        <div className="letter">!</div>
      </div>
      <div className="introduction">
        <h1>
          I have a passion for
          <div className="mask">
            <div className="hobby-container" ref={containerRef}>
              <ul>
                <li>
                  <p className="hobby hobby1">webdesign</p>
                </li>
                <li>
                  <p className="hobby hobby2">learning</p>
                </li>
                <li>
                  <p className="hobby hobby3">programming</p>
                </li>
                <li>
                  <p className="hobby hobby4" ref={textRef}>
                    &amp; animals!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </h1>
      </div>
      <div className="contact-container">
        <HashLink to="/#contacts">
          <h2 className="contact-btn" ref={linkRef}>
            contact me!
          </h2>
          <div className="contact-circle" ref={circleRef}></div>
        </HashLink>
      </div>
    </>
  );
};

export default HeroIntroductionENG;
