import React from "react";
import styled from "styled-components";
import { Navbar, Hero, Footer, ScrollTop } from "../components";

const HomePage = () => {
  return (
    <Wrapper>
      {/* <Navbar /> */}
      <Hero />
      <Footer />
      <ScrollTop />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HomePage;
