import React, { useState, useEffect } from "react";
import { LanguageENG, LanguageHU } from "./index";
import useMediaQuery from "../utils/mediaQuery";
import styled from "styled-components";
import { gsap } from "gsap";

const Language = () => {
  const mediaQuery = useMediaQuery("(min-width: 320px)");
  const [active, setActive] = useState(false);

  useEffect(() => {
    gsap.set(".bg-mask", { height: "0%" });

    const tl = gsap.timeline();

    tl.fromTo(
      ".underline-eng",
      { scaleX: 0, x: "15%" },
      {
        duration: 2,
        delay: 0.5,
        scaleX: 1,
        x: "0",
        transformOrigin: "100% 50%",
      }
    ).fromTo(
      ".underline-hu",
      { scaleX: 0, x: "-15%" },
      {
        duration: 2,
        delay: 0.5,
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
        {
          duration: 1,
          delay: 0.5,
          height: "100%",
          onComplete: () => setActive(true),
        },
        0
      )
        .fromTo(
          ".link-container-mask",
          { height: "100%" },
          { duration: 1, height: "20%", minHeight: "70px" },
          1
        )
        .to(
          ".bg-mask",
          {
            duration: 1,
            height: "20%",
            minHeight: "70px",
          },
          1
        );
    } else {
      gsap.set(".bg", { height: "100%", filter: "grayscale(0%)" });
    }
  }, [mediaQuery]);

  return (
    <Wrapper>
      <div className="wrap">
        <LanguageENG active={active} />
        <LanguageHU active={active} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .wrap {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: grid;
    gap: 1rem;
    background: #111;
  }

  .container {
    width: 100%;
    height: 50vh;
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

  .link-container {
    z-index: 4;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    a {
      width: 100%;
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
    width: 35%;
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
    .wrap {
      padding: 0 4rem;
    }

    .bg-mask {
      display: block;
    }
  }

  @media screen and (min-width: 1200px) {
    .wrap {
      height: 100vh;
      padding: 2rem 1rem;
      grid-template-columns: repeat(2, 1fr);
    }

    .container {
      height: 100%;
    }

    .img-container {
      height: 100%;
    }
  }
`;

export default Language;
