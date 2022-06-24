import React from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMeIntroduction = () => {
  const { language } = useMainContext();

  return (
    <Wrapper className="cont">
      <h2>AboutMeIntroduction</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1;
  background-color: dodgerblue;
`;

export default AboutMeIntroduction;
