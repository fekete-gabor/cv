import React, { useEffect } from "react";
import styled from "styled-components";
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
        end: "+=150%",
      },
    });

    tl.to(".left", { x: "-100%" }, 1).to(".right", { x: "100%" }, 1);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".box3",
        start: "top 30%",
        end: "bottom 0%+=250",
        scrub: true,
        markers: true,
      },
    });

    tl.fromTo(
      [".layer0", ".box3"],
      { autoAlpha: 1 },
      { duration: 2, ease: "linear", autoAlpha: 0 }
    )
      .fromTo(
        [".layer1", ".box2"],
        { autoAlpha: 1 },
        { duration: 2, ease: "linear", autoAlpha: 0, delay: 6 }
      )
      .fromTo(
        [".layer2", ".box1"],
        { autoAlpha: 1 },
        { duration: 2, ease: "linear", autoAlpha: 0, delay: 6 }
      );
  }, []);

  return (
    <Wrapper>
      <div className="panel-container">
        <Introduction />
        <Portrait />
        <HeroVideo />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 500vh;
  .panel-container {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
  }
`;

export default Hero;
