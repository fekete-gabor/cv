import React, { useEffect } from "react";
import styled from "styled-components";
import { getRandomValue } from "../utils/helpers";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap/dist/gsap";

const PreLoader = () => {
  const { secondary_colors: colors } = useMainContext();

  useEffect(() => {
    gsap.utils.toArray(".circle").forEach((circle) => {
      const randomColor = getRandomValue(colors);

      gsap.set(circle, { scale: 0, background: colors[randomColor] });

      const tl = gsap.timeline({ repeat: "-1" });
      const direction = circle.dataset.direction;
      const translateAmountX = circle.dataset.translate_x;
      const translateAmountY = circle.dataset.translate_y;

      if (direction === "vertical") {
        tl.to(circle, {
          duration: 1,
          ease: "slow",
          delay: 0.5,
          scale: 1,
          y: translateAmountY,
        }).to(circle, { duration: 0.5, scale: 0, x: "0", y: "0" });
      }

      if (direction === "horizontal") {
        tl.to(circle, {
          duration: 1,
          ease: "slow",
          delay: 0.5,
          scale: 1,
          x: translateAmountX,
        }).to(circle, { duration: 0.5, scale: 0, x: "0", y: "0" });
      }

      if (direction === "diagonal-top") {
        tl.to(circle, {
          duration: 1,
          ease: "slow",
          delay: 1,
          scale: 1,
          x: translateAmountX,
          y: translateAmountY,
        }).to(circle, { duration: 0.5, scale: 0, x: "0", y: "0" });
      }

      if (direction === "diagonal-bot") {
        tl.to(circle, {
          duration: 1,
          ease: "slow",
          delay: 1,
          scale: 1,
          x: translateAmountX,
          y: translateAmountY,
        }).to(circle, { duration: 0.5, scale: 0, x: "0", y: "0" });
      }
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".dot").forEach((dot, i) => {
      gsap.set(dot, { autoAlpha: 0 });
      const randomColor = getRandomValue(colors);

      const tl = gsap.timeline({
        duration: 0.7,
        stagger: 1.3,
        repeat: "-1",
        repeatDelay: 3,
      });

      tl.to(dot, {
        autoAlpha: 1,
        delay: i / 10,
        color: colors[randomColor],
      }).to(dot, { autoAlpha: 0 });
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <h2>
          loading<span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </h2>
        <div
          className="circle"
          data-translate_y="-300"
          data-direction="vertical"
        ></div>
        <div
          className="circle"
          data-translate_y="300"
          data-direction="vertical"
        ></div>
        <div
          className="circle"
          data-translate_x="-300"
          data-direction="horizontal"
        ></div>
        <div
          className="circle"
          data-translate_x="300"
          data-direction="horizontal"
        ></div>
        <div
          className="circle"
          data-translate_x="300"
          data-translate_y="-300"
          data-direction="diagonal-top"
        ></div>
        <div
          className="circle"
          data-translate_x="-300"
          data-translate_y="300"
          data-direction="diagonal-top"
        ></div>
        <div
          className="circle"
          data-translate_x="-300"
          data-translate_y="-300"
          data-direction="diagonal-bot"
        ></div>
        <div
          className="circle"
          data-translate_x="300"
          data-translate_y="300"
          data-direction="diagonal-bot"
        ></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    h2 {
      z-index: 1;
    }
  }

  .circle {
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;
export default PreLoader;
