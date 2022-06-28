import React from "react";

const HeroIntroductionHU = ({ refs }) => {
  const { containerRef, textRef } = refs;

  return (
    <>
      <div className="letter-container">
        <div className="letter">H</div>
        <div className="letter">e</div>
        <div className="letter">l</div>
        <div className="letter">l</div>
        <div className="letter">o</div>
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
          I have a passion for
          <div className="mask">
            <div className="hobby-container" ref={containerRef}>
              <ul>
                <li>
                  <p className="hobby hobby1">webdesign-t,</p>
                </li>
                <li>
                  <p className="hobby hobby2">tanulást,</p>
                </li>
                <li>
                  <p className="hobby hobby3">dolgokat építeni,</p>
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
    </>
  );
};

export default HeroIntroductionHU;
