import React, { useEffect } from "react";
import styled from "styled-components";
import plans from "../assets/plans.jpg";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FuturePlans = () => {
  const { language } = useMainContext();

  useEffect(() => {}, []);

  return (
    <Wrapper className="comp" id="plans">
      <div className="img-container">
        <img src={plans} alt="plans" className="plans-bg" />
      </div>

      <div className="plans-container">
        <div className="container">
          <h1>
            {language === "eng"
              ? "my plans for the future"
              : "jövőbeli terveim"}
          </h1>
          <article>
            <h2>
              {language === "eng"
                ? "though i do not know what the future holds, education-wise i have a great deal of plans"
                : "habár nem tudom mit hoz a jövő, tanulást illetően elég sok tervem van"}
            </h2>
            <p>
              {language === "eng"
                ? "here are some of the technologies i'm interested in -"
                : "itt egy pár technólógia azok közül, amik érdekelnek -"}
            </p>
          </article>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 3rem 0.5rem;
  text-align: center;
  position: relative;

  .img-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      clip-path: url(#clippath);
    }
  }

  .plans-container {
    position: relative;
  }

  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  h1 {
    text-transform: capitalize;
  }

  article {
    background-color: plum;
    width: max-content;
    margin-top: 5rem;
  }
`;

export default FuturePlans;
