import React, { useEffect } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import {
  Hero,
  AboutMe,
  Projects,
  FuturePlans,
  Contacts,
  ComponentIndexes,
} from "../components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const { setCurrentIndex, countComponents, all_components } = useMainContext();

  useEffect(() => {
    const components = [...document.querySelectorAll(".comp")];
    countComponents(components);
  }, []);

  useEffect(() => {
    if (all_components) {
      ScrollTrigger.matchMedia({
        "(min-width: 1100px)": function () {
          all_components.map((component, i) => {
            ScrollTrigger.create({
              trigger: component,
              start: "top center",
              end: "bottom center",
              onEnter: () => setCurrentIndex(i),
              onEnterBack: () => setCurrentIndex(i),
            });
          });
        },
      });
    }
  }, [all_components]);

  return (
    <Wrapper>
      <Hero />
      <AboutMe />
      <Projects />
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
