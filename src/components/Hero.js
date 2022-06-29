import React from "react";
import styled from "styled-components";
import { HeroPortrait, HeroIntroduction } from "./index";

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <HeroIntroduction />
        <HeroPortrait />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  @media screen and (min-width: 1100px) {
    .container {
      display: grid;
      grid-template-columns: 70% 30%;
    }
  }
`;

export default Hero;
