import React, { useEffect } from "react";
import styled from "styled-components";
import { Navbar, Hero, AboutMe, Footer, ScrollTop } from "../components";
import { gsap } from "gsap";

const HomePage = () => {
  useEffect(() => {
    let svgns = "http://www.w3.org/2000/svg";
    let root = document.querySelector("svg");
    let ease = 0.75;

    let pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    window.addEventListener("mousemove", (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    });

    let leader = (prop) => {
      return prop === "x" ? pointer.x : pointer.y;
    };

    let total = 100;
    for (let i = 0; i < total; i++) {
      leader = createLine(leader, i);
    }

    function createLine(leader, i) {
      let line = document.createElementNS(svgns, "line");
      root.appendChild(line);

      gsap.set(line, { x: -15, y: -15, opacity: (total - i) / total });

      let pos = gsap.getProperty(line);

      gsap.to(line, {
        duration: 1000,
        x: "+=1",
        y: "+=1",
        repeat: -1,
        ease: "none",
        modifiers: {
          x: () => {
            let posX = pos("x");
            let leaderX = leader("x");
            let x = posX + (leaderX - posX) * ease;
            line.setAttribute("x2", leaderX - x);
            return x;
          },
          y: () => {
            let posY = pos("y");
            let leaderY = leader("y");
            let y = posY + (leaderY - posY) * ease;
            line.setAttribute("y2", leaderY - y);
            return y;
          },
        },
      });

      return pos;
    }
  }, []);
  return (
    <Wrapper>
      {/* <Navbar /> */}
      <svg></svg>
      <Hero />
      <AboutMe />
      <Footer />
      <ScrollTop />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  svg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--clr-primary-3);
  }

  line {
    stroke: tomato;
    stroke-width: 2;
  }
`;

export default HomePage;
