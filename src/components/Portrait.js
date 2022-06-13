import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Portrait = () => {
  useEffect(() => {}, []);

  return (
    <Wrapper className="right">
      <div className="layer layer0"></div>
      <div className="layer layer1"></div>
      <div className="layer layer2"></div>
      <div className="layer layer3"></div>
      <div className="box0"></div>
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

  .layer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15rem;
    color: whitesmoke;

    height: 100%;
    position: absolute;
  }

  .layer1 {
    z-index: 6;
    background-color: dodgerblue;
    width: 25%;
  }

  .layer2 {
    z-index: 5;
    width: 50%;
    background: goldenrod;
  }

  .layer3 {
    z-index: 4;
    width: 75%;
    background: hotpink;
  }

  .layer0 {
    z-index: 7;
    width: 100%;
    background-color: black;
  }

  .box0,
  .box1,
  .box2,
  .box3 {
    width: 500px;
    height: 500px;
    color: whitesmoke;
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .box0 {
    z-index: 10;
    top: 80%;
    left: 45%;
    background: black;
  }

  .box1 {
    z-index: 9;
    top: 75%;
    left: 50%;
    background-color: dodgerblue;
  }

  .box2 {
    z-index: 8;
    top: 70%;
    left: 55%;
    background-color: orange;
  }

  .box3 {
    z-index: 7;
    top: 65%;
    left: 60%;
    background-color: hotpink;
  }
`;

export default Portrait;
