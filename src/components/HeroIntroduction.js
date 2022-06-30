import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { getRandomColor } from "../utils/helpers";
import useMediaQuery from "../utils/mediaQuery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HeroIntroductionENG, HeroIntroductionHU } from "./index";
gsap.registerPlugin(ScrollTrigger);

const HeroIntroduction = () => {
  const { secondary_colors: colors, language } = useMainContext();
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const refs = { containerRef, textRef };

  const mediaQuery = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    // set font color on doc load
    gsap.set([".introduction-container", ".hobby", ".letter"], {
      color: "#222",
    });

    // change font color on scroll
    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        ScrollTrigger.create({
          trigger: ".hobby",
          start: "top 40%",
          end: "+=150%",

          onEnter: () =>
            gsap.to([".introduction-container", ".hobby", ".letter", ".link"], {
              duration: 1.5,
              color: "white",
            }),

          onEnterBack: () =>
            gsap.to([".introduction-container", ".hobby", ".letter", ".link"], {
              duration: 1.5,
              color: "white",
            }),

          onLeave: () =>
            gsap.to([".introduction-container", ".hobby", ".letter", ".link"], {
              duration: 1.5,
              color: "#222",
            }),

          onLeaveBack: () =>
            gsap.to([".introduction-container", ".hobby", ".letter", ".link"], {
              duration: 1.5,
              color: "#222",
            }),
        });
      },
    });
  }, []);

  useEffect(() => {
    // set logo text shadow on doc load
    gsap.set([".main-letter", ".navbar-brand"], {
      textShadow: "-6px 0px 2px #ce5937",
    });

    // change logo color & text shadow on scroll
    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        ScrollTrigger.create({
          trigger: ".hobby",
          start: "top 40%",
          end: "+=150%",

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
      },
    });
  }, []);

  // translate hobbies on y axis
  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    const containerHeight = container.getBoundingClientRect().height;
    const textHeight = text.getBoundingClientRect().height;
    const height = containerHeight - textHeight;

    gsap.to(container, { y: "none" });

    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".box3",
            start: "top 30%",
            end: "+=200%",
            scrub: true,
          },
        });
        tl.to(container, { y: `-${height}` });
      },
    });
  }, [mediaQuery]);

  // text animation on hover
  useEffect(() => {
    gsap.utils.toArray(".letter").forEach((letter) => {
      const tl = gsap.timeline();

      const baseWidth = letter.getBoundingClientRect().width;

      const textAnimation = () => {
        letter.addEventListener("mouseover", (e) => {
          const randomColor = getRandomColor(colors);

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
  }, [mediaQuery]);

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
  }
`;

export default HeroIntroduction;
