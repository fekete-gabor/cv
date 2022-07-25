import React, { useEffect } from "react";
import styled from "styled-components";
import { logos } from "../utils/helpers";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FuturePlans = () => {
  const { language } = useMainContext();

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": function () {
        gsap.utils.toArray(".logo").forEach((logo, i) => {
          gsap.set(logo, { autoAlpha: 0 });
          ScrollTrigger.create({
            trigger: "#plans",
            start: "top center",
            end: "bottom center",
            onEnter: () =>
              gsap.to(logo, {
                duration: 1,
                delay: i / 10,
                autoAlpha: 1,
              }),
          });
        });
      },
    });
  }, []);

  return (
    <Wrapper className="comp" id="plans">
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
                ? "though i haven't decided yet what to study next, i have a great deal of plans"
                : "egyelőre még nem döntöttem el mit fogok tanulni következőnek, viszont elég sok tervem van"}
            </h2>
            <p>
              {language === "eng"
                ? "here are some of the technologies i'm interested in -"
                : "itt egy pár technólógia azok közül, amik érdekelnek -"}
            </p>
          </article>
        </div>
      </div>
      <div className="logo-container">
        {logos.map((logo, i) => {
          return <img src={logo} alt="logo" key={i} className="logo" />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  background-color: #d4d0cd;
  padding: 3rem 0.5rem;
  margin: 0 auto;
  text-align: center;

  .plans-container {
    width: 75vw;
    margin: 3rem auto;
  }

  h1 {
    text-transform: capitalize;
  }

  article {
    margin-top: 5rem;
    p {
      font-size: 1.25rem;
    }
  }

  .logo-container {
    width: 75vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    margin: 3rem auto;
    gap: 1rem;

    img {
      width: 100%;
      height: 100px;
      object-fit: scale-down;
    }
  }
`;

export default FuturePlans;
