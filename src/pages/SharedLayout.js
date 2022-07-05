import React, { useEffect } from "react";
import styled from "styled-components";
import useMediaQuery from "../utils/mediaQuery";
import { Navbar, Sidebar, Footer, ScrollTop } from "../components";
import { Outlet } from "react-router-dom";
import { gsap } from "gsap";

const SharedLayout = () => {
  const mediaQuery = useMediaQuery("(min-width: 1100px)");

  useEffect(() => {
    if (mediaQuery) {
      let svgns = "http://www.w3.org/2000/svg";
      let root = document.querySelector("svg");
      let ease = 0.75;

      let pointer = {
        x: window.innerWidth,
        y: window.innerHeight,
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

        let colors = [
          "#0049A6",
          "#41BFB3",
          "#9FC131",
          "#F20CCC",
          "#F27405",
          "#9F46A8",
        ];

        gsap.set(line, {
          x: -15,
          y: -15,
          stroke: colors[0],
          strokeWidth: 3.5,
          opacity: (total - i) / total,
        });

        colors.push(colors.shift());

        let pos = gsap.getProperty(line);

        gsap.to(line, {
          duration: 1000,
          x: "+=1",
          y: "+=1",
          repeat: -1,
          keyframes: colors.map((color) => ({ stroke: color })),
          duration: 1.5 * colors.length,
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
    }
  }, [mediaQuery]);

  return (
    <Wrapper>
      <svg className="mainBG"></svg>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
      <ScrollTop />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;
  .mainBG {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default SharedLayout;
