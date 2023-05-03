import React, { useEffect } from "react";
import portrait from "../assets/portrait.jpg";
import styled from "styled-components";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMePortrait = () => {
  useEffect(() => {
    gsap.set(".portrait-box", { bottom: 0, right: 0 });

    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        ScrollTrigger.create({
          trigger: ".portrait",
          start: "top center",
          end: "bottom center",

          onEnter: () =>
            gsap.to(".portrait-box", {
              duration: 1,
              bottom: "-20px",
              right: "-20px",
            }),

          onEnterBack: () =>
            gsap.to(".portrait-box", {
              duration: 1,
              bottom: "-20px",
              right: "-20px",
            }),

          onLeave: () =>
            gsap.to(".portrait-box", { duration: 1, bottom: 0, right: 0 }),

          onLeaveBack: () =>
            gsap.to(".portrait-box", { duration: 1, bottom: 0, right: 0 }),
        });
      },
    });
  }, []);

  return (
    <Wrapper>
      <div className="portrait">
        <img src={portrait} alt="portrait" />
        <div className="portrait-box"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .portrait {
    width: 80%;
    height: 80%;
    background-color: plum;
    position: relative;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .portrait-box {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border: solid 3.5px dodgerblue;
  }
`;

export default AboutMePortrait;
