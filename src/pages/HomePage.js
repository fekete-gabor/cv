import React from "react";
import styled from "styled-components";
import { Hero, AboutMe, Contacts } from "../components";

const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
      <AboutMe />
      <Contacts />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export default HomePage;
