import React, { useEffect } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const { language } = useMainContext();

  return (
    <Wrapper className="left">
      <div className="layer layer0"></div>
      <div className="layer layer1"></div>
      <div className="layer layer2"></div>
      <div className="layer layer3"></div>
      <div className="int-container">
        {language === "hu" ? (
          <h2>
            Hello, a nevem Gábor!
            <br /> I have a passion for
            <div className="hobbies">
              <ul>
                <li>
                  <p className="hobby hobby1">webdesign-t,</p>
                </li>
                <li>
                  <p className="hobby hobby2">tanulást,</p>
                </li>
                <li>
                  <p className="hobby hobby3">&amp; az állatokat!</p>
                </li>
              </ul>
            </div>
          </h2>
        ) : (
          <h2>
            Hi, my name is Gábor!
            <br /> I have a passion for
            <div className="hobbies">
              <ul>
                <li>
                  <p className="hobby hobby1">webdesign,</p>
                </li>
                <li>
                  <p className="hobby hobby2">learning,</p>
                </li>
                <li>
                  <p className="hobby hobby3">&amp; animals!</p>
                </li>
              </ul>
            </div>
          </h2>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  border: none;

  .int-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 7;
    p {
      padding: 0.5rem 0;
    }
  }

  .hobbies {
    width: fit-content;
  }

  .hobby2 {
    margin: 0.25rem 0;
  }

  .layer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15rem;
    color: whitesmoke;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .layer0 {
    z-index: 6;
    background-color: bisque;
  }

  .layer1 {
    z-index: 5;
    background: dodgerblue;
  }

  .layer2 {
    z-index: 4;
    background: goldenrod;
  }

  .layer3 {
    z-index: 3;
    background: hotpink;
  }

  @media screen and (min-width: 1100px) {
    p {
      overflow: hidden;
    }

    .hobbies {
      overflow: hidden;
      height: 60px;
    }
  }
`;

export default Introduction;
