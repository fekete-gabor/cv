import React, { useEffect } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const {
    secondary_colors: colors,
    getRandomColor,
    language,
  } = useMainContext();

  useEffect(() => {
    gsap.utils.toArray(".underline").forEach((line) => {
      const randomColor = getRandomColor(colors);
      gsap.set(line, {
        background: ` linear-gradient(29deg, ${colors[randomColor]} 50%, beige 50%, ${colors[randomColor]} 50%)`,
      });
    });
  }, []);

  return (
    <Wrapper className="nav-center">
      <div className="link-container">
        <div className="col col2 navbar-brand">G</div>
        <div className="col col1">
          <ul>
            <li>
              <p className="link">home</p>
              <div className="underline"></div>
            </li>
            <li>
              <p className="link">about me</p>
              <div className="underline"></div>
            </li>
            <li>
              <p className="link">projects</p>
              <div className="underline"></div>
            </li>
            <li>
              <p className="link">contact me</p>
              <div className="underline"></div>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  z-index: 1;
  position: fixed;

  .link-container {
    display: flex;
  }

  .navbar-brand {
    font-size: 4rem;
    background: white;
    margin: 0.5rem 1rem;
  }

  .underline {
    margin: 0 auto;
    height: 3px;
    width: 40px;
    transition: all 0.5s;
  }

  .col {
    height: fit-content;
    align-self: center;
    padding: 0 1rem;
    ul {
      display: flex;
      gap: 0 2rem;
      li {
        p {
          font-size: 1.5rem;
          padding: 0 1rem;
        }
        &:hover .underline {
          width: 70px;
        }
      }
    }
  }
`;

export default Navbar;
