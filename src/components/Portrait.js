import React from "react";
import styled from "styled-components";

const Portrait = () => {
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
  background-color: bisque;
  border: none;

  .layer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15rem;
    color: whitesmoke;
    height: 100%;
    position: absolute;
  }

  .layer0 {
    z-index: 7;
    width: 100%;
    background-color: #222;
  }

  .layer1 {
    z-index: 6;
    width: 68%;
    background: dodgerblue;
  }

  .layer2 {
    z-index: 5;
    width: 76%;
    background: goldenrod;
  }

  .layer3 {
    z-index: 4;
    width: 84%;
    background: hotpink;
  }

  .box0,
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

  .box0 {
    z-index: 10;
    top: 80%;
    left: 45%;
    background: #222;
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

  @media screen and (min-width: 1100px) {
    .box0,
    .box1,
    .box2,
    .box3 {
      width: 500px;
      height: 500px;
    }

    .layer0 {
      width: 60%;
      background: bisque;
    }
  }
`;

export default Portrait;
