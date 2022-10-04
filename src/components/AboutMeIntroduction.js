import React from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { AboutMeIntroductionENG, AboutMeIntroductionHU } from "./index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMeIntroduction = () => {
  const { language } = useMainContext();

  return (
    <Wrapper>
      {language === "eng" ? (
        <AboutMeIntroductionENG />
      ) : (
        <AboutMeIntroductionHU />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  article {
    padding: 0.5rem;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 400px) {
    article {
      padding: 2rem;
    }
  }
`;

export default AboutMeIntroduction;
