import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useMediaQuery from "../utils/mediaQuery";
import { useMainContext } from "../context/main-context";
import { getRandomValue } from "../utils/helpers";
import { AboutMePortrait, AboutMeIntroduction } from "./index";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const { language } = useMainContext();
  const mediaQuery = useMediaQuery("(min-width: 1100px)");

  const [randomColorArray, setRandomColorArray] = useState([
    "#0CF25D",
    "#41BFB3",
    "#F2CB05",
  ]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#about",
      start: "top center",
      end: "bottom center",
      onEnter: () => gsap.to("body", { background: "#222" }),
      onEnterBack: () => gsap.to("body", { background: "#222" }),
      onLeave: () => gsap.to("body", { background: "rgb(234, 222, 199)" }),
      onLeaveBack: () => gsap.to("body", { background: "rgb(234, 222, 199)" }),
    });
  }, [language, mediaQuery]);

  useEffect(() => {
    // change logo's & main letter's color, text shadow on scroll
    ScrollTrigger.create({
      trigger: "#about",
      start: "top center",
      end: "bottom center",
      onEnter: () =>
        gsap.to([".main-letter", ".navbar-brand"], {
          duration: 1.5,
          color: "#0CF25D",
          textShadow: "-6px 0px 2px #F2055C",
        }),

      onEnterBack: () =>
        gsap.to([".main-letter", ".navbar-brand"], {
          duration: 1.5,
          color: "#0CF25D",
          textShadow: "-6px 0px 2px #F2055C",
        }),

      onLeave: () =>
        gsap.to([".main-letter", ".navbar-brand"], {
          duration: 1.5,
          color: "#222",
          textShadow: "-6px 0px 2px #ce5937",
        }),

      onLeaveBack: () =>
        gsap.to([".main-letter", ".navbar-brand"], {
          duration: 1.5,
          color: "#222",
          textShadow: "-6px 0px 2px #ce5937",
        }),
    });
  }, [language, mediaQuery]);

  useEffect(() => {
    // change font color on scroll
    ScrollTrigger.create({
      trigger: "#about",
      start: "top center",
      end: "bottom center",
      onEnter: () =>
        gsap.to(
          [".link", ".paragraph", ".scroll-up-arrow", ".scroll-up-text"],
          {
            duration: 1.5,
            color: "white",
          }
        ),

      onEnterBack: () =>
        gsap.to(
          [".link", ".paragraph", ".scroll-up-arrow", ".scroll-up-text"],
          {
            duration: 1.5,
            color: "white",
          }
        ),

      onLeave: () =>
        gsap.to(
          [".link", ".paragraph", ".scroll-up-arrow", ".scroll-up-text"],
          {
            duration: 1.5,
            color: "#222",
          }
        ),

      onLeaveBack: () =>
        gsap.to(
          [".link", ".paragraph", ".scroll-up-arrow", ".scroll-up-text"],
          {
            duration: 1.5,
            color: "#222",
          }
        ),
    });
  }, [language, mediaQuery]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#about",
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.utils
          .toArray([".title", ".highlight", ".list-item"])
          .forEach((item, i) => {
            const randomColor = getRandomValue(randomColorArray);

            const tl = gsap.timeline();

            tl.to(item, {
              delay: i / 10,
              color: randomColorArray[randomColor],
            });
          });
      },

      onEnterBack: () => {
        gsap.utils
          .toArray([".title", ".highlight", ".list-item"])
          .reverse()
          .forEach((item, i) => {
            const randomColor = getRandomValue(randomColorArray);

            const tl = gsap.timeline();

            tl.to(item, {
              delay: i / 10,
              color: randomColorArray[randomColor],
            });
          });
      },

      onLeave: () => {
        gsap.utils
          .toArray([".highlight", ".list-item", ".title"])
          .forEach((item) => {
            gsap.to(item, { color: "#222" });
          });
      },

      onLeaveBack: () => {
        gsap.utils
          .toArray([".highlight", ".list-item", ".title"])
          .forEach((item) => {
            gsap.to(item, { color: "#222" });
          });
      },
    });
  }, [language, mediaQuery]);

  return (
    <Wrapper className="comp" id="about">
      <h1 className="title">{language === "eng" ? "about me" : "rólam"}</h1>
      <div className="container">
        <AboutMeIntroduction />
        <AboutMePortrait />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 85vw;
  height: fit-content;
  margin: 10rem auto;

  h1 {
    text-transform: capitalize;
    text-align: center;
  }

  .container {
    margin: 2rem 0;
    display: grid;
    p {
      font-family: var(--font-family-cursive);
    }
  }

  @media screen and (min-width: 1100px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default AboutMe;
