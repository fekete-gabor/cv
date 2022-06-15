import React, { useEffect } from "react";
import styled from "styled-components";
import { HeroVideo, Portrait, Introduction } from "./index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // translate x left and right side
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(max-width: 1099px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".panel-container",
            pin: true,
            scrub: true,
            start: "top top",
            end: "+=100%",
          },
        });

        tl.to(".left", { x: "-110%" }, 1).to(".right", { x: "110%" }, 1);
      },

      "(min-width: 1100px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".panel-container",
            pin: true,
            scrub: true,
            start: "top top",
            end: "+=400%",
          },
        });

        tl.to(".left", { x: "-110%" }, 1).to(".right", { x: "110%" }, 1);
      },
    });
  }, []);

  // fade out layers and silhouettes
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".box3",
            start: "top 30%",
            end: "+=200%",
            scrub: true,
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
          )
          .fromTo(
            ".layer3",
            { autoAlpha: 1 },
            { duration: 2, ease: "linear", autoAlpha: 0, delay: 6 }
          );
      },
    });
  }, []);

  // translate y hobbies
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".box3",
            start: "top 30%",
            end: "+=150%",
            scrub: true,
          },
        });

        tl.to(".hobby", { y: "-124" });
      },
    });
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
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
  }

  @media screen and (min-width: 1100px) {
    .panel-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Hero;
