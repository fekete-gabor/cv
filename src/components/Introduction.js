import React, { useEffect } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const { language } = useMainContext();

  return (
    <Wrapper className="left">
      <div className="int-container">
        <h2>
          {language === "hu" ? "hello, a nevem gábor!" : "hi, my name is gábor"}
        </h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  z-index: 2;
`;

export default Introduction;
