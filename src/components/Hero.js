import React, { useEffect } from "react";
import styled from "styled-components";
import { HeroPortrait, HeroIntroduction } from "./index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = ({ colors }) => {
  return (
    <Wrapper>
      <div className="container">
        <HeroIntroduction colors={colors} />
        <HeroPortrait />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 70% 30%;
    position: relative;
  }
`;

export default Hero;
