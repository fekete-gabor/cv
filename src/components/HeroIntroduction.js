import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  const refs = { containerRef, textRef };

  const mediaQuery = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    // set font color on doc load
    gsap.set([".introduction-container", ".hobby", ".letter", ".contact-btn"], {
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
            gsap.to(
              [
                ".introduction-container",
                ".hobby",
                ".letter",
                ".link",
                ".contact-btn",
              ],
              {
                duration: 1.5,
                color: "white",
              }
            ),

          onEnterBack: () =>
            gsap.to(
              [
                ".introduction-container",
                ".hobby",
                ".letter",
                ".link",
                ".contact-btn",
              ],
              {
                duration: 1.5,
                color: "white",
              }
            ),

          onLeave: () =>
            gsap.to(
              [
                ".introduction-container",
                ".hobby",
                ".letter",
                ".link",
                ".contact-btn",
              ],
              {
                duration: 1.5,
                color: "#222",
              }
            ),

          onLeaveBack: () =>
            gsap.to(
              [
                ".introduction-container",
                ".hobby",
                ".letter",
                ".link",
                ".contact-btn",
              ],
              {
                duration: 1.5,
                color: "#222",
              }
            ),
        });
      },
    });
  }, [language]);

  useEffect(() => {
    // set logo's & main letter's text shadow on doc load
    gsap.set([".main-letter", ".navbar-brand", ".contact-circle"], {
      textShadow: "-6px 0px 2px #ce5937",
    });

    // change logo's & main letter's color, text shadow on scroll
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
            trigger: ".box3",
            start: "top 30%",
            end: "+=200%",
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
  }, [mediaQuery, language]);

  useEffect(() => {
    // change contact circle's background color on scroll
    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        ScrollTrigger.create({
          trigger: ".hobby",
          start: "top 40%",
          end: "+=150%",

          onEnter: () =>
            gsap.to(".contact-circle", {
              duration: 1.5,
              background: "#0CF25D",
            }),

          onEnterBack: () =>
            gsap.to(".contact-circle", {
              duration: 1.5,
              background: "#0CF25D",
            }),

          onLeave: () =>
            gsap.to(".contact-circle", {
              duration: 1.5,
              background: "#ce5937",
            }),

          onLeaveBack: () =>
            gsap.to(".contact-circle", {
              duration: 1.5,
              background: "#ce5937",
            }),
        });
      },
    });

    const contactBtn = document.querySelector(".contact-btn");
    const btnWidth = contactBtn.getBoundingClientRect().width;
    const btnHeigth = contactBtn.getBoundingClientRect().height;

    gsap.set(".contact-circle", {
      width: btnWidth / 3.5,
      height: btnHeigth / 1.5,
      background: "#ce5937",
      borderRadius: "50%",
    });

    contactBtn.addEventListener("mouseover", () => {
      gsap.to(".contact-circle", {
        duration: 0.4,
        ease: "ElasticIn",
        width: btnWidth,
        borderRadius: 0,
      });
    });

    contactBtn.addEventListener("mouseleave", () => {
      gsap.to(".contact-circle", {
        duration: 0.4,
        ease: "ElasticOut",
        width: btnWidth / 3.5,
        borderRadius: "50%",
      });
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
        <div className="btn-container">
          {language === "eng" ? (
            <Link to="/contacts" className="contact-btn">
              send message!
            </Link>
          ) : (
            <Link to="/contacts" className="contact-btn">
              üzenetet küldök!
            </Link>
          )}
          <div className="contact-circle"></div>
        </div>
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

  .btn-container {
    margin-top: 3rem;
    position: relative;
    a {
      position: absolute;
      cursor: pointer;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      margin: 0;
      text-transform: capitalize;
    }
  }

  .contact-circle {
    position: absolute;
    top: 50%;
    left: 0;
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
