import React, { useEffect } from "react";
import { LanguageENG, LanguageHU } from "./index";
import useMediaQuery from "../utils/mediaQuery";
import styled from "styled-components";
import { gsap } from "gsap";

const Language = () => {
  const mediaQuery = useMediaQuery("(min-width: 320px)");

  useEffect(() => {
    gsap.set(".bg-mask", { height: "0%" });

    const tl = gsap.timeline();

    tl.fromTo(
      ".underline-eng",
      { scaleX: 0, x: "15%" },
      { duration: 2, scaleX: 1, x: "0", transformOrigin: "100% 50%" }
    ).fromTo(
      ".underline-hu",
      { scaleX: 0, x: "-15%" },
      {
        duration: 2,
        scaleX: 1,
        x: "0",
        transformOrigin: "0% 50%",
      },
      0
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    if (mediaQuery) {
      tl.fromTo(
        ".bg",
        { height: "0%", filter: "grayscale(100%)" },
        { duration: 1, height: "100%" },
        0
      )
        .fromTo(
          ".link-container-mask",
          { height: "100%" },
          { duration: 1, height: "20%" },
          0
        )
        .to(".bg-mask", { duration: 1, height: "20%" }, 0);
    } else {
      gsap.set(".bg", { height: "100%", filter: "grayscale(0%)" });
    }
  }, [mediaQuery]);

  return (
    <Wrapper>
      <div className="wrap">
        <LanguageENG />
        <LanguageHU />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .wrap {
    width: 100%;
    height: 100%;
    padding: 0 4rem;
    display: grid;
    background: #111;
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  .img-container {
    width: 100%;
    height: 50vh;
    position: relative;
    display: grid;
    align-items: center;
    img {
      position: absolute;
      width: 100%;
      object-fit: cover;
    }
  }

  .container-eng {
    padding: 1rem 0 0.5rem 0;
  }

  .container-hu {
    padding: 0.5rem 0 1rem 0;
  }

  .link-container {
    z-index: 4;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: transparent;
    a {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: whitesmoke;
      font-size: 3rem;
    }
  }

  .link-container-mask {
    overflow: hidden;
    background: linear-gradient(
      90deg,
      rgba(0.2, 0.2, 0.2, 0.2),
      rgba(0.2, 0.2, 0.2, 0.2)
    );
    width: 100%;
    z-index: 3;
    position: absolute;
  }

  .bg-mask {
    z-index: 2;
    display: none;
  }

  .bg {
    z-index: 1;
  }

  .underline-eng,
  .underline-hu {
    z-index: 4;
    height: 3px;
    width: 75%;
    position: absolute;
    top: 55%;
  }

  .underline-eng {
    background: rgb(1, 33, 105);
    background: -moz-linear-gradient(
      90deg,
      rgba(1, 33, 105, 1) 15%,
      rgba(255, 255, 255, 1) 50%,
      rgba(200, 16, 46, 1) 85%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(1, 33, 105, 1) 15%,
      rgba(255, 255, 255, 1) 50%,
      rgba(200, 16, 46, 1) 85%
    );
    background: linear-gradient(
      90deg,
      rgba(1, 33, 105, 1) 15%,
      rgba(255, 255, 255, 1) 50%,
      rgba(200, 16, 46, 1) 85%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#012169",endColorstr="#c8102e",GradientType=1);
  }

  .underline-hu {
    background: rgb(205, 42, 62);
    background: -moz-linear-gradient(
      90deg,
      rgba(205, 42, 62, 1) 15%,
      rgba(255, 255, 255, 1) 50%,
      rgba(67, 111, 77, 1) 85%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(205, 42, 62, 1) 15%,
      rgba(255, 255, 255, 1) 50%,
      rgba(67, 111, 77, 1) 85%
    );
    background: linear-gradient(
      90deg,
      rgba(205, 42, 62, 1) 15%,
      rgba(255, 255, 255, 1) 50%,
      rgba(67, 111, 77, 1) 85%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#cd2a3e",endColorstr="#436f4d",GradientType=1);
  }

  @media screen and (min-width: 460px) {
    .bg-mask {
      display: block;
    }
  }

  @media screen and (min-width: 1200px) {
    .wrap {
      height: 100vh;
      padding: 5rem 0;
      grid-template-columns: repeat(2, 1fr);
    }

    .img-container {
      height: 100%;
    }

    .bg-hu,
    .bg-mask-hu {
      padding: 0 1rem 0 0.5rem;
    }

    .bg-eng,
    .bg-mask-eng {
      padding: 0 0.5rem 0 1rem;
    }
  }

  @media screen and (min-width: 1400px) {
    .wrap {
      padding: 2rem 0;
    }
  }
`;

export default Language;
