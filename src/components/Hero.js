import React from "react";
import styled from "styled-components";
import { HeroPortrait, HeroIntroduction } from "./index";

const Hero = () => {
  return (
    <Wrapper className="comp">
      <div className="hero-container">
        <HeroIntroduction />
        <HeroPortrait />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hero-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  @media screen and (min-width: 1100px) {
    .hero-container {
      display: grid;
      grid-template-columns: 70% 30%;
    }
  }
`;

export default Hero;
