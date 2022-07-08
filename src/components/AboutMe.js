import React from "react";
import styled from "styled-components";
import { AboutMeIntroduction, AboutMePortrait } from "./index";

const AboutMe = () => {
  return (
    <Wrapper className="comp">
      <AboutMeIntroduction />
      <AboutMePortrait />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default AboutMe;
