import React from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";

const AboutMeIntroduction = () => {
  const { language } = useMainContext();

  return (
    <Wrapper>
      <h2>AboutMeIntroduction</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: dodgerblue;
`;

export default AboutMeIntroduction;
