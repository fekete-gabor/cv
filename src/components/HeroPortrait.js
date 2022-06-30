import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMainContext } from "../context/main-context";
gsap.registerPlugin(ScrollTrigger);

const HeroPortrait = () => {
  const { primary_colors: colors } = useMainContext();

  // change background color on scroll
  useEffect(() => {
    const body = document.querySelector("body");

    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".container",
            start: "top 0%",
            end: "+=200%",
            pin: true,
            scrub: true,
          },
        });

        tl.to(body, { background: colors[0] })
          .fromTo([".box4", ".layer1"], { autoAlpha: 1 }, { autoAlpha: 0 }, 0)
          .to(body, { background: colors[1] })
          .fromTo([".box3", ".layer2"], { autoAlpha: 1 }, { autoAlpha: 0 }, 1)
          .to(body, { background: colors[2] })
          .fromTo([".box2", ".layer3"], { autoAlpha: 1 }, { autoAlpha: 0 }, 2)
          .to(body, { background: colors[3] })
          .fromTo(".layer4", { autoAlpha: 1 }, { autoAlpha: 0 }, 3)
          .to(body, { background: colors[4] });
      },
    });
  }, []);

  return (
    <Wrapper>
      <div className="layer layer1" style={{ background: colors[0] }}></div>
      <div className="layer layer2" style={{ background: colors[1] }}></div>
      <div className="layer layer3" style={{ background: colors[2] }}></div>
      <div className="layer layer4" style={{ background: colors[3] }}></div>
      <div className="layer layer5"></div>
      <div className="box box1" style={{ background: colors[0] }}></div>
      <div className="box box2" style={{ background: colors[1] }}></div>
      <div className="box box3" style={{ background: colors[2] }}></div>
      <div className="box box4" style={{ background: colors[3] }}></div>
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

  .box {
    width: 100%;
    height: 100%;
    display: none;
  }

  .box1 {
    z-index: 4;
    display: flex;
  }

  .box2 {
    bottom: 2%;
    right: 19%;
    z-index: 3;
  }

  .box3 {
    bottom: 4%;
    right: 18%;
    z-index: 2;
  }

  .box4 {
    bottom: 6%;
    right: 17%;
    z-index: 1;
  }

  @media screen and (min-width: 1100px) {
    position: unset;

    .layer {
      display: flex;
    }

    .box {
      display: flex;
      width: 400px;
      height: 400px;
      position: absolute;
    }

    .box1 {
      bottom: 0;
      right: 20%;
    }
  }
`;

export default HeroPortrait;
