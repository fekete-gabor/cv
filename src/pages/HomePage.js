import React, { useEffect } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import {
  Hero,
  AboutMe,
  Skills,
  FuturePlans,
  Contacts,
  ComponentIndexes,
} from "../components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const {
    current_component_index,
    setCurrentIndex,
    countComponents,
    all_component_index: comp,
  } = useMainContext();

  useEffect(() => {
    let components = [...document.querySelectorAll(".comp")];
    countComponents(components);
  }, []);

  useEffect(() => {
    if (comp) {
      comp.map((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => setCurrentIndex(i),
          onEnterBack: () => setCurrentIndex(i),
        });
      });
    }
  }, [comp]);

  return (
    <Wrapper>
      <Hero />
      <AboutMe />
      <Skills />
      <FuturePlans />
      <Contacts />
      <ComponentIndexes />
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
