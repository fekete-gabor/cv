import React, { useEffect } from "react";
import styled from "styled-components";
import bg from "../assets/bg.mp4";
import { HeroVideo, Portrait, Introduction } from "./index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".panel-container",
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=100%",
      },
    });

    tl.fromTo(
      ".line",
      { height: 0, width: "2px", background: "transparent" },
      { duration: 1, height: "200vh", background: "yellow" }
    )
      .fromTo(
        ".left",
        { border: "solid 1px transparent" },
        { duration: 1, borderRight: "solid 1px yellow" },
        "-=1"
      )
      .fromTo(
        ".right",
        { border: "solid 1px transparent" },
        { duration: 1, borderLeft: "solid 1px yellow" },
        "-=1"
      )
      .to(".line", { duration: 0, autoAlpha: 0 }, 1)
      .to(".left", { x: "-100%" }, 1)
      .to(".right", { x: "100%" }, 1);
  }, []);

  return (
    <Wrapper>
      <div className="panel-container">
        <Introduction />
        <Portrait />
        <HeroVideo />
      </div>
      <div className="line"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .panel-container {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
  }

  .line {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;

export default Hero;
