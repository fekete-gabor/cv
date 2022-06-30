import React from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {
  const { language } = useMainContext();

  return (
    <Wrapper>
      <h2>Contacts</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export default Contacts;
