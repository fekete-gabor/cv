import React, { useEffect } from "react";
import styled from "styled-components";
import hungary from "../assets/hungary.png";
import uk from "../assets/united-kingdom.png";
import { navLinksENG, navLinksHU } from "../utils/helpers";
import useMediaQuery from "../utils/mediaQuery";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";

const Sidebar = () => {
  const { language, setLanguage, is_sidebar_open, closeSidebar } =
    useMainContext();

  const mediaQuery = useMediaQuery("(min-width: 992px)");

  // close sidebar from 992px
  useEffect(() => {
    if (mediaQuery) {
      closeSidebar();
    }
    // eslint-disable-next-line
  }, [mediaQuery]);

  useEffect(() => {
    const tl = gsap.timeline();

    if (is_sidebar_open) {
      // set sidebar link color
      gsap.to(".link", { color: "white" });

      // sidebar open animation
      tl.to(".sidebar", { duration: 1, x: "0" }).to(".col", { y: "-200%" }, 0);
    } else {
      // sidebar close animation
      tl.to(".sidebar", { duration: 1, x: "-100%" }).to(
        ".col",
        { duration: 1, y: "0" },
        1
      );
    }
  }, [is_sidebar_open]);

  return (
    <Wrapper className="sidebar">
      <div className="link-container">
        <ul onClick={() => closeSidebar()}>
          {language === "eng" ? navLinksENG : navLinksHU}
        </ul>
        {language === "eng" ? (
          <img
            src={hungary}
            alt="flag of hungary"
            data-language="hu"
            onClick={(e) => setLanguage(e.target.dataset.language)}
          />
        ) : (
          <img
            src={uk}
            alt="flag of united kingdom"
            data-language="eng"
            onClick={(e) => setLanguage(e.target.dataset.language)}
          />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 100%;
  height: 100%;
  background-color: #222;
  position: fixed;
  z-index: 997;
  transform: translateX(-100%);

  .link-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    ul {
      gap: 0rem 2rem;
      li {
        a {
          font-size: 3rem;
          padding: 1rem;
          color: white;
        }
        &:hover .underline {
          width: 70px;
        }
      }
    }
    img {
      height: 50px;
      width: 50px;
      margin-top: 1rem;
      cursor: pointer;
    }
  }

  .underline {
    margin: 0 auto;
    height: 3px;
    width: 20px;
    transition: all 0.5s;
  }
`;

export default Sidebar;
