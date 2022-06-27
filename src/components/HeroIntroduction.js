import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroIntroduction = () => {
  const { secondary_colors: colors, language } = useMainContext();
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set([".introduction-container", ".hobby", ".letter"], {
      color: "#222",
    });

    gsap.set(".main-letter", { textShadow: "-6px 0px 2px #ce5937" });

    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        ScrollTrigger.create({
          trigger: ".hobby",
          start: "top 40%",
          end: "+=150%",

          onEnter: () =>
            gsap.to([".introduction-container", ".hobby", ".letter"], {
              duration: 1.5,
              color: "white",
            }),

          onEnterBack: () =>
            gsap.to([".introduction-container", ".hobby", ".letter"], {
              duration: 1.5,
              color: "white",
            }),

          onLeave: () =>
            gsap.to([".introduction-container", ".hobby", ".letter"], {
              duration: 1.5,
              color: "#222",
            }),

          onLeaveBack: () =>
            gsap.to([".introduction-container", ".hobby", ".letter"], {
              duration: 1.5,
              color: "#222",
            }),
        });
      },
    });
  }, []);

  useEffect(() => {
    gsap.set(".main-letter", { textShadow: "-6px 0px 2px #ce5937" });

    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        ScrollTrigger.create({
          trigger: ".hobby",
          start: "top 40%",
          end: "+=150%",

          onEnter: () =>
            gsap.to(".main-letter", {
              duration: 1.5,
              color: "#0CF25D",
              textShadow: "-6px 0px 2px #222",
            }),

          onEnterBack: () =>
            gsap.to(".main-letter", {
              duration: 1.5,
              color: "#0CF25D",
              textShadow: "-6px 0px 2px #222",
            }),

          onLeave: () =>
            gsap.to(".main-letter", {
              duration: 1.5,
              color: "#222",
              textShadow: "-6px 0px 2px #ce5937",
            }),

          onLeaveBack: () =>
            gsap.to(".main-letter", {
              duration: 1.5,
              color: "#222",
              textShadow: "-6px 0px 2px #ce5937",
            }),
        });
      },
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    const containerHeight = container.getBoundingClientRect().height;
    const textHeight = text.getBoundingClientRect().height;
    const height = containerHeight - textHeight;

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
        tl.to(".hobby-container", { y: `-${height}` });
      },
    });
  }, [containerRef, textRef]);

  useEffect(() => {
    gsap.utils.toArray(".letter").forEach((letter) => {
      const tl = gsap.timeline();

      const baseWidth = letter.getBoundingClientRect().width;

      const textAnimation = () => {
        letter.addEventListener("mouseover", (e) => {
          // get random color
          const getRandomColor = () => {
            return Math.floor(Math.random() * colors.length);
          };

          const randomColor = getRandomColor();

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
  }, []);

  return (
    <Wrapper>
      <div className="introduction-container">
        {language === "hu" ? (
          <>
            <div className="letter-container">
              <div className="letter">H</div>
              <div className="letter">e</div>
              <div className="letter">l</div>
              <div className="letter">l</div>
              <div className="letter">o</div>
              <div className="letter comma">,</div>
              <div className="main-letter">G</div>
              <div className="letter">á</div>
              <div className="letter">b</div>
              <div className="letter">o</div>
              <div className="letter">r</div>
              <div className="letter comma"></div>
              <div className="letter">v</div>
              <div className="letter">a</div>
              <div className="letter">g</div>
              <div className="letter">y</div>
              <div className="letter">o</div>
              <div className="letter">k</div>
              <div className="letter">!</div>
            </div>
            <div className="introduction">
              <h1>
                I have a passion for
                <div className="test">
                  <div className="hobby-container" ref={containerRef}>
                    <ul>
                      <li>
                        <p className="hobby hobby1">webdesign-t,</p>
                      </li>
                      <li>
                        <p className="hobby hobby2">tanulást,</p>
                      </li>
                      <li>
                        <p className="hobby hobby3">dolgokat építeni,</p>
                      </li>
                      <li>
                        <p className="hobby hobby4" ref={textRef}>
                          &amp; az állatokat!
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </h1>
            </div>
          </>
        ) : (
          <>
            <div className="letter-container">
              <div className="letter">H</div>
              <div className="letter">i</div>
              <div className="letter comma">,</div>
              <div className="letter">I</div>
              <div className="letter">'</div>
              <div className="letter">m</div>
              <div className="letter comma">,</div>
              <div className="main-letter">G</div>
              <div className="letter">á</div>
              <div className="letter">b</div>
              <div className="letter">o</div>
              <div className="letter">r</div>
              <div className="letter">!</div>
            </div>
            <div className="introduction">
              <h1>
                I have a passion for
                <div className="test">
                  <div className="hobby-container" ref={containerRef}>
                    <ul>
                      <li>
                        <p className="hobby hobby1">webdesign,</p>
                      </li>
                      <li>
                        <p className="hobby hobby2">learning,</p>
                      </li>
                      <li>
                        <p className="hobby hobby3">building things,</p>
                      </li>
                      <li>
                        <p className="hobby hobby4" ref={textRef}>
                          &amp; animals!
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </h1>
            </div>
          </>
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

    .test {
      height: 60px;
      overflow: hidden;
      display: flex;
      align-items: flex-start;
    }

    .hobby-container {
      align-items: flex-start;
    }
  }
`;

export default HeroIntroduction;
