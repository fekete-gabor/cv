import React from "react";
import { HashLink } from "react-router-hash-link";

const HeroIntroductionHU = ({ refs }) => {
  const { containerRef, textRef, linkRef, circleRef } = refs;

  return (
    <>
      <div className="letter-container">
        <div className="letter">H</div>
        <div className="letter">e</div>
        <div className="letter">l</div>
        <div className="letter">l</div>
        <div className="letter">ó</div>
        <div className="letter comma">,</div>
        <div className="main-letter">G</div>
        <div className="letter">á</div>
        <div className="letter">b</div>
        <div className="letter">o</div>
        <div className="letter">r</div>
        <div className="letter comma"></div>
        <div className="letter">v</div>
        <div className="letter">a</div>
        <div className="letter">g</div>
        <div className="letter">y</div>
        <div className="letter">o</div>
        <div className="letter">k</div>
        <div className="letter">!</div>
      </div>
      <div className="introduction">
        <h1>
          Szeretem
          <div className="mask">
            <div className="hobby-container" ref={containerRef}>
              <ul>
                <li>
                  <p className="hobby hobby1">a webdesign-t,</p>
                </li>
                <li>
                  <p className="hobby hobby2">a tanulást,</p>
                </li>
                <li>
                  <p className="hobby hobby3">programozni,</p>
                </li>
                <li>
                  <p className="hobby hobby4" ref={textRef}>
                    &amp; az állatokat!
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
            üzenetet küldök!
          </h2>
          <div className="contact-circle" ref={circleRef}></div>
        </HashLink>
      </div>
    </>
  );
};

export default HeroIntroductionHU;
