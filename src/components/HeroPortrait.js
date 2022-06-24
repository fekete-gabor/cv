import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroPortrait = () => {
  useEffect(() => {
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

        tl.to(".mainBG", { background: "#F25774" })
          .fromTo([".box4", ".layer1"], { autoAlpha: 1 }, { autoAlpha: 0 }, 0)
          .to(".mainBG", { background: "#41BFB3" })
          .fromTo([".box3", ".layer2"], { autoAlpha: 1 }, { autoAlpha: 0 }, 1)
          .to(".mainBG", { background: "#F2D6B3" })
          .fromTo([".box2", ".layer3"], { autoAlpha: 1 }, { autoAlpha: 0 }, 2)
          .to(".mainBG", { background: "#F2A444" })
          .fromTo(".layer4", { autoAlpha: 1 }, { autoAlpha: 0 }, 3)
          .to(".mainBG", { background: "#050A26" });
      },
    });
  }, []);

  return (
    <Wrapper>
      <div className="layer layer1"></div>
      <div className="layer layer2"></div>
      <div className="layer layer3"></div>
      <div className="layer layer4"></div>
      <div className="box box1"></div>
      <div className="box box2"></div>
      <div className="box box3"></div>
      <div className="box box4"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;

  .layer {
    width: 50px;
    height: 100%;
  }

  .layer4 {
    background-color: var(--clr-primary-1);
  }

  .layer3 {
    background-color: #f2d6b3;
  }

  .layer2 {
    background-color: #41bfb3;
  }

  .layer1 {
    background-color: #f25774;
  }

  .box {
    width: 400px;
    height: 400px;
    position: absolute;
  }

  .box1 {
    bottom: 0;
    right: 20%;
    background: #222;
    z-index: 4;
  }

  .box2 {
    bottom: 2%;
    right: 19%;
    background: #f2d6b3;
    z-index: 3;
  }

  .box3 {
    bottom: 4%;
    right: 18%;
    background: #41bfb3;
    z-index: 2;
  }

  .box4 {
    bottom: 6%;
    right: 17%;
    background: #f25774;
    z-index: 1;
  }
`;

export default HeroPortrait;
