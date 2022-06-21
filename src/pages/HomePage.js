import React, { useEffect } from "react";
import styled from "styled-components";
import { Navbar, Hero, AboutMe, Footer, ScrollTop } from "../components";
import { gsap } from "gsap";

const HomePage = () => {
  // useEffect(() => {
  //   gsap.defaults({ ease: "slow" });

  //   let svgns = "http://www.w3.org/2000/svg";
  //   let root = document.querySelector("svg");
  //   let ease = 0.75;

  //   let pointer = {
  //     x: window.innerWidth / 2,
  //     y: window.innerHeight / 2,
  //   };

  //   window.addEventListener("mousemove", function (event) {
  //     pointer.x = event.clientX;
  //     pointer.y = event.clientY;
  //   });

  //   let leader = pointer;

  //   let total = 150;
  //   for (let i = 0; i < total; i++) {
  //     leader = createLine(leader, i);
  //   }

  //   function createLine(leader, i) {
  //     let line = document.createElementNS(svgns, "line");
  //     root.appendChild(line);

  //     gsap.set(line, { x: -15, y: -15, alpha: (total - i) / total });

  //     gsap.to(line, {
  //       duration: 1000,
  //       x: "+=1",
  //       y: "+=1",
  //       repeat: -1,
  //       modifiers: {
  //         x: function () {
  //           let posX = gsap.getProperty(line, "x");
  //           let leaderX = gsap.getProperty(leader, "x");

  //           let x = posX + (leaderX - posX) * ease;
  //           line.setAttribute("x2", leaderX - x);
  //           return x;
  //         },
  //         y: function () {
  //           let posY = gsap.getProperty(line, "y");
  //           let leaderY = gsap.getProperty(leader, "y");

  //           let y = posY + (leaderY - posY) * ease;
  //           line.setAttribute("y2", leaderY - y);
  //           return y;
  //         },
  //       },
  //     });

  //     return line;
  //   }
  // }, []);

  return (
    <Wrapper>
      {/* <svg></svg> */}
      {/* <Navbar /> */}
      <Hero />
      <AboutMe />
      <Footer />
      <ScrollTop />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* svg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  line {
    stroke: var(--clr-primary-4);
    stroke-width: 4;
  } */
`;

export default HomePage;
