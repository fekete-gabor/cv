import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { LanguageENG, LanguageHU } from "./index";

const Language = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // animation on doc load
    tl.fromTo(
      ".underline-eng",
      { scaleX: 0, x: "15%" },
      { duration: 2, scaleX: 1, x: "0", transformOrigin: "100% 50%" }
    )
      .fromTo(
        ".underline-hu",
        { scaleX: 0, x: "-15%" },
        {
          duration: 2,
          scaleX: 1,
          x: "0",
          transformOrigin: "0% 50%",
        },
        0
      )
      .fromTo(
        ".bg-gray",
        { height: "0%", filter: "grayscale(100%)" },
        { duration: 1, height: "100%" },
        0
      )
      .fromTo(
        ".link-container",
        { height: "100%" },
        { duration: 1, height: "20%" },
        0
      )
      .to(".bg-colored", { duration: 1, height: "20%" }, 0);

    gsap.set(".bg-colored", { height: "0%" });
  }, []);

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
    height: 100vh;
    display: grid;
    background: #222;
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

  .link-container {
    z-index: 3;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(0.2, 0.2, 0.2, 0.2),
      rgba(0.2, 0.2, 0.2, 0.2)
    );
    position: absolute;
    a {
      width: 100%;
      text-align: center;
      color: whitesmoke;
      font-size: 3rem;
    }
  }

  .bg-colored {
    z-index: 2;
  }

  .bg-gray {
    z-index: 1;
  }

  .underline-eng,
  .underline-hu {
    height: 3px;
    width: 75%;
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

  @media screen and (min-width: 1100px) {
    .wrap {
      grid-template-columns: repeat(2, 1fr);
    }

    .img-container {
      height: 100%;
    }
  }
`;

export default Language;
