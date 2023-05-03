import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMainContext } from "../context/main-context";
gsap.registerPlugin(ScrollTrigger);

const HeroPortrait = () => {
  const { primary_colors: colors } = useMainContext();

  useEffect(() => {
    const body = document.querySelector("body");
    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-container",
            start: "top 0%",
            end: "+=200%",
            pin: true,
            scrub: true,
          },
        });

        tl.to(body, { backgroundColor: colors[0] })
          .fromTo(".layer1", { autoAlpha: 1 }, { autoAlpha: 0 }, 0)
          .to(body, { backgroundColor: colors[1] }, 1)
          .fromTo(".layer2", { autoAlpha: 1 }, { autoAlpha: 0 }, 1)
          .to(body, { backgroundColor: colors[2] }, 2)
          .fromTo(".layer3", { autoAlpha: 1 }, { autoAlpha: 0 }, 2)
          .to(body, { backgroundColor: colors[3] }, 3)
          .fromTo(".layer4", { autoAlpha: 1 }, { autoAlpha: 0 }, 3)
          .to(body, { backgroundColor: colors[4] }, 4)
          .fromTo(".layer5", { autoAlpha: 1 }, { autoAlpha: 0 }, 4);
      },
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <div className="layer layer1" style={{ background: colors[0] }}></div>
      <div className="layer layer2" style={{ background: colors[1] }}></div>
      <div className="layer layer3" style={{ background: colors[2] }}></div>
      <div className="layer layer4" style={{ background: colors[3] }}></div>
      <div className="layer layer5"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  position: absolute;

  .layer {
    width: 50px;
    height: 100%;
    display: none;
  }

  .layer5 {
    width: 35%;
    background: var(--clr-primary-5);
  }

  @media screen and (min-width: 1100px) {
    position: unset;

    .layer {
      display: flex;
    }
  }
`;

export default HeroPortrait;
