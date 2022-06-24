import React, { useEffect } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useSyncExternalStore } from "react";
gsap.registerPlugin(ScrollTrigger);

const HeroIntroduction = ({ colors }) => {
  const { language } = useMainContext();

  useEffect(() => {
    gsap.set([".int-container", ".hobby", ".letter"], { color: "white" });

    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        ScrollTrigger.create({
          trigger: ".hobby",
          start: "top 30%",
          end: "+=150%",
          markers: true,

          onEnter: () =>
            gsap.to([".int-container", ".hobby", ".letter"], {
              duration: 1.5,
              color: "#222",
            }),

          onEnterBack: () =>
            gsap.to([".int-container", ".hobby", ".letter"], {
              duration: 1.5,
              color: "#222",
            }),

          onLeave: () =>
            gsap.to([".int-container", ".hobby", ".letter"], {
              duration: 1.5,
              color: "white",
            }),

          onLeaveBack: () =>
            gsap.to([".int-container", ".hobby", ".letter"], {
              duration: 1.5,
              color: "white",
            }),
        });
      },
    });
  }, []);

  useEffect(() => {
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

        tl.to(".hobby", { y: "-215" });
      },
    });
  }, []);

  useEffect(() => {
    if (colors) {
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
                scaleX: "1.1",
                scaleY: "0.9",
                ease: "yoyo",
                color: colors[randomColor],
              })
                .to(e.target, {
                  duration: 0.2,
                  scaleX: "0.9",
                  scaleY: "1.1",
                })
                .to(e.target, {
                  duration: 0.2,
                  scaleX: "1.1",
                  scaleY: "0.9",
                })
                .to(e.target, {
                  duration: 0.3,
                  scaleX: "0.9",
                  scaleY: "1.1",
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
  }, [colors]);

  return (
    <Wrapper>
      <div className="int-container">
        {language === "hu" ? (
          <>
            <div className="letter-container">
              <div className="letter">H</div>
              <div className="letter">e</div>
              <div className="letter">l</div>
              <div className="letter">l</div>
              <div className="letter">o</div>
              <div className="letter comma">,</div>
              <div className="letter">G</div>
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
            <div className="letter-container e">
              <h1>
                I have a passion for
                <div className="hobbies">
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
                      <p className="hobby hobby4">&amp; az állatokat!</p>
                    </li>
                  </ul>
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
              <div className="letter">G</div>
              <div className="letter">á</div>
              <div className="letter">b</div>
              <div className="letter">o</div>
              <div className="letter">r</div>
              <div className="letter">!</div>
            </div>
            <div className="letter-container e">
              <h1>
                I have a passion for
                <div className="hobbies">
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
                      <p className="hobby hobby4">&amp; animals!</p>
                    </li>
                  </ul>
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
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .int-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 1rem;
    margin: 0 2rem;
    width: 100%;
    height: 100%;
    p {
      padding: 0.5rem 0;
    }
  }

  .e {
    padding-left: 0.5rem;
  }

  .letter-container {
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
  }

  .letter {
    font-size: 7rem;
    margin: 0 0.1rem;
  }

  .comma {
    margin: 0 0.5rem;
  }

  .hobbies {
    width: fit-content;
  }

  .hobby2,
  .hobby3 {
    margin: 0.25rem 0;
  }

  @media screen and (min-width: 1100px) {
    p {
      overflow: hidden;
    }

    .hobbies {
      overflow: hidden;
      height: 60px;
    }
  }
`;

export default HeroIntroduction;
