import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroBanner = () => {
  useEffect(() => {
    const test = [...document.querySelectorAll(".asd")];

    test.forEach((i) => {
      i.addEventListener("mouseover", (e) => {
        gsap.to(i, { color: "yellow", duration: 1, fontSize: "2rem" });
      });
    });
  }, []);
  return (
    <Wrapper>
      <div className="asd">T</div>
      <div className="asd">H</div>
      <div className="asd">I</div>
      <div className="asd">S</div>
      <div className="asd">I</div>
      <div className="asd">S</div>
      <div className="asd">J</div>
      <div className="asd">U</div>
      <div className="asd">S</div>
      <div className="asd">T</div>
      <div className="asd">A</div>
      <div className="asd">T</div>
      <div className="asd">E</div>
      <div className="asd">S</div>
      <div className="asd">T</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color: #222;
    font-size: 15rem;
    text-shadow: 0 0 3px whitesmoke, 0 0 3px whitesmoke, 0 0 3px whitesmoke,
      0 0 3px whitesmoke;
    margin: 0 0.5rem;
  }
`;

export default HeroBanner;
