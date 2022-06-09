import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ScrollTop = () => {
  return (
    <Wrapper>
      <h2>scrolltop</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ScrollTop;
