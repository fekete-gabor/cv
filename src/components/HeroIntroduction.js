import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { HeroIntroductionENG, HeroIntroductionHU } from "./index";
import { getRandomValue } from "../utils/helpers";
import useMediaQuery from "../utils/mediaQuery";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroIntroduction = () => {
  const { secondary_colors: colors, language } = useMainContext();
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const linkRef = useRef(null);
  const circleRef = useRef(null);
  const refs = { containerRef, textRef, linkRef, circleRef };

  const mediaQuery = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    const introductionContainer = document.querySelector(
      ".introduction-container"
    );
    const hobbies = document.querySelectorAll(".hobby");
    const letters = document.querySelectorAll(".letter");
    const contactBtn = document.querySelector(".contact-btn");

    // set font color on doc load
    gsap.set([introductionContainer, hobbies, letters, contactBtn], {
      color: "#222",
    });

    // change font color on scroll
    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        ScrollTrigger.create({
          trigger: ".box4",
          start: "top 20%",
          end: "+=150%",

          onEnter: () =>
            gsap.to([introductionContainer, hobbies, letters, contactBtn], {
              duration: 1.5,
              color: "white",
            }),

          onEnterBack: () =>
            gsap.to([introductionContainer, hobbies, letters, contactBtn], {
              duration: 1.5,
              color: "white",
            }),

          onLeave: () =>
            gsap.to([introductionContainer, hobbies, letters, contactBtn], {
              duration: 1.5,
              color: "#222",
            }),

          onLeaveBack: () =>
            gsap.to([introductionContainer, hobbies, letters, contactBtn], {
              duration: 1.5,
              color: "#222",
            }),
        });
      },
    });
  }, [language]);

  useEffect(() => {
    const mainLetter = document.querySelector(".main-letter");
    const logo = document.querySelectorAll(".navbar-brand");
    // set logo's & main letter's text shadow on doc load
    gsap.set([mainLetter, logo], {
      textShadow: "-6px 0px 2px #ce5937",
    });

    // change logo's & main letter's color, text shadow on scroll
    ScrollTrigger.create({
      trigger: ".box4",
      start: "top 20%",
      end: "+=150%",

      onEnter: () =>
        gsap.to(mainLetter, {
          duration: 1.5,
          color: "#0CF25D",
          textShadow: "-6px 0px 2px #F2055C",
        }),

      onEnterBack: () =>
        gsap.to(mainLetter, {
          duration: 1.5,
          color: "#0CF25D",
          textShadow: "-6px 0px 2px #F2055C",
        }),

      onLeave: () =>
        gsap.to(mainLetter, {
          duration: 1.5,
          color: "#222",
          textShadow: "-6px 0px 2px #ce5937",
        }),

      onLeaveBack: () =>
        gsap.to(mainLetter, {
          duration: 1.5,
          color: "#222",
          textShadow: "-6px 0px 2px #ce5937",
        }),
    });
  }, [language]);

  // translate hobbies on y axis
  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    let containerHeight = container.getBoundingClientRect().height;
    let textHeight = text.getBoundingClientRect().height;
    let height = containerHeight - textHeight;

    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".box5",
            start: "top 20%",
            end: "+=200%",
            markers: true,
            scrub: true,
          },
        });
        tl.fromTo(container, { y: 0 }, { y: `-${height}` });
      },
    });
  }, [language]);

  // animate text on hover
  useEffect(() => {
    if (mediaQuery) {
      gsap.utils.toArray(".letter").forEach((letter) => {
        const tl = gsap.timeline();

        const baseWidth = letter.getBoundingClientRect().width;

        const textAnimation = () => {
          letter.addEventListener("mouseover", (e) => {
            const randomColor = getRandomValue(colors);
            const currentWidth = e.target.getBoundingClientRect().width;

            if (baseWidth === currentWidth) {
              tl.to(e.target, {
                duration: 0.2,
                scaleX: "1.3",
                scaleY: "0.8",
                ease: "yoyo",
                color: colors[randomColor],
              })
                .to(e.target, {
                  duration: 0.3,
                  scaleX: "0.8",
                  scaleY: "1.3",
                })
                .to(e.target, {
                  duration: 0.3,
                  scaleX: "1.3",
                  scaleY: "0.8",
                })
                .to(e.target, {
                  duration: 0.5,
                  scaleX: "0.8",
                  scaleY: "1.3",
                })
                .to(e.target, {
                  duration: 0.4,
                  scaleX: "1",
                  scaleY: "1",
                  color: "unset",
                });
            }
          });
        };

        letter.addEventListener("mouseleave", () => {
          letter.removeEventListener("mouseover", textAnimation);
        });

        textAnimation();
      });
    }
    // eslint-disable-next-line
  }, [mediaQuery, language]);

  useEffect(() => {
    const link = linkRef.current;
    const circle = circleRef.current;
    const linkWidth = link.getBoundingClientRect().width;

    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      circle,
      {
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        background: "#0CF25D",
      },
      {
        ease: "power4",
        borderRadius: "25px",
        width: linkWidth,
      }
    );

    link.addEventListener("mouseover", () => {
      tl.play();
    });

    link.addEventListener("mouseleave", () => {
      tl.reverse();
    });

    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        ScrollTrigger.create({
          trigger: ".box4",
          start: "top 20%",
          end: "+=150%",

          onEnter: () =>
            gsap.to(circle, {
              duration: 1.5,
              background: "#F2055C",
            }),

          onEnterBack: () =>
            gsap.to(circle, {
              duration: 1.5,
              background: "#F2055C",
            }),

          onLeave: () =>
            gsap.to(circle, {
              duration: 1.5,
              background: "#0CF25D",
            }),

          onLeaveBack: () =>
            gsap.to(circle, {
              duration: 1.5,
              background: "#0CF25D",
            }),
        });
      },
    });
  }, [mediaQuery, language]);

  return (
    <Wrapper>
      <div className="introduction-container">
        {language === "eng" ? (
          <HeroIntroductionENG refs={refs} />
        ) : (
          <HeroIntroductionHU refs={refs} />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  .introduction-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 1rem;
    margin: 0 2rem;
    font-size: 2rem;
    font-weight: 600;
    p {
      padding: 0.5rem 0;
    }
  }

  .introduction {
    h1 {
      font-size: 2rem;
    }
  }

  .letter-container,
  .introduction {
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
  }

  .letter,
  .main-letter {
    font-size: 2rem;
    margin: 0 0.1rem;
  }

  .comma {
    margin: 0 0.5rem;
  }

  .hobby-container {
    width: fit-content;
  }

  .hobby2,
  .hobby3 {
    margin: 0.25rem 0;
  }

  .contact-container {
    position: relative;
    margin-top: 2rem;
    h2 {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-transform: capitalize;
      color: #222;
      padding: 1rem;
      z-index: 1;
    }
  }

  .contact-circle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (min-width: 1100px) {
    height: 100%;
    .introduction-container {
      width: 100%;
      height: 100%;
      p {
        padding: 0.5rem 0;
      }
    }

    .introduction {
      padding-left: 0.5rem;
    }

    p {
      overflow: hidden;
    }

    .letter,
    .main-letter {
      font-size: 5rem;
    }

    .mask {
      height: 60px;
      display: flex;
      align-items: flex-start;
      overflow: hidden;
    }

    .hobby-container {
      align-items: flex-start;
    }

    .btn-container {
      a {
        padding: 1rem;
      }
    }
  }
`;

export default HeroIntroduction;
