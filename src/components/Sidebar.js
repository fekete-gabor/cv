import React, { useEffect } from "react";
import styled from "styled-components";
import { navLinksENG, navLinksHU } from "../utils/helpers";
import useMediaQuery from "../utils/mediaQuery";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";

const Sidebar = () => {
  const { language, is_sidebar_open, closeSidebar } = useMainContext();

  const mediaQuery = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    gsap.set(".sidebar", { x: "-100%" });
  }, []);

  // close sidebar from 992px
  useEffect(() => {
    if (mediaQuery) {
      closeSidebar();
    }
  }, [mediaQuery]);

  useEffect(() => {
    const tl = gsap.timeline();

    if (is_sidebar_open) {
      // set sidebar link color
      gsap.to(".link", { color: "white" });

      // sidebar open animation
      tl.to(".sidebar", { duration: 1, x: "0" })
        .to([".main-letter", ".navbar-brand"], {
          duration: 0.5,
          color: "#0CF25D",
          textShadow: "-6px 0px 2px #F2055C",
        })
        .to(".col", { y: "-200%" }, 0)
        .to(".icon-close", { duration: 0.5, color: "#0cf25d" });
    } else {
      // sidebar close animation
      tl.to(".sidebar", { duration: 1, x: "-100%" })
        .to([".main-letter", ".navbar-brand"], {
          duration: 0.5,
          color: "#222",
          textShadow: "-6px 0px 2px #ce5937",
        })
        .to(".col", { duration: 1, y: "0" }, 1);
    }
  }, [is_sidebar_open]);

  return (
    <Wrapper className="sidebar">
      <div className="link-container">
        <ul onClick={() => closeSidebar()}>
          {language === "eng" ? navLinksENG : navLinksHU}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #222;
  position: fixed;
  z-index: 998;

  .link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    ul {
      gap: 0 2rem;
      li {
        a {
          font-size: 3rem;
          padding: 0 1rem;
          color: white;
        }
        &:hover .underline {
          width: 70px;
        }
      }
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
