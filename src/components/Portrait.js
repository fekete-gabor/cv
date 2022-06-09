import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Portrait = () => {
  useEffect(() => {
    const handleChange = (el, trigger, display, background, start) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          scrub: true,
          start: `top top${start}`,
          end: "bottom center",
        },
      });

      tl.to(el, { display, background });
    };

    // hide box 3
    handleChange(".box3", ".box3", "hotpink", "none", "-=100");

    // change clr of box 2 & 1
    handleChange(".box2", ".box3", "hotpink", "flex", "-=100");
    handleChange(".box1", ".box3", "orange", "flex", "-=100");

    // hide box 2
    handleChange(".box2", ".box2", "hotpink", "none", "-=100");

    // change clr of box 1
    handleChange(".box1", ".box2", "hotpink", "flex", "-=100");

    // hide box 1
    handleChange(".box1", ".box1", "hotpink", "none", "-=150");
  }, []);

  return (
    <Wrapper className="right">
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 2;
  position: relative;
  background-color: #222;

  .box1,
  .box2,
  .box3 {
    width: 250px;
    height: 250px;
    color: whitesmoke;
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .box1 {
    z-index: 4;
    top: 50%;
    left: 50%;
    background-color: dodgerblue;
  }

  .box2 {
    z-index: 3;
    top: 45%;
    left: 55%;
    background-color: orange;
  }

  .box3 {
    z-index: 2;
    top: 40%;
    left: 60%;
    background-color: hotpink;
  }
`;

export default Portrait;
