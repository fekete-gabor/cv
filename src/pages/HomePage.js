import React from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { PreLoader, Hero, AboutMe, Contacts } from "../components";

const HomePage = () => {
  const { is_loading } = useMainContext();

  if (is_loading) {
    return <PreLoader />;
  }

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
