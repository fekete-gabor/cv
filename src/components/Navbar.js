import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  getRandomColor,
  scrollToTop,
  navLinksENG,
  navLinksHU,
} from "../utils/helpers";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const {
    secondary_colors: colors,
    is_sidebar_open,
    openSidebar,
    closeSidebar,
    language,
  } = useMainContext();

  useEffect(() => {
    gsap.utils.toArray(".underline").forEach((line) => {
      const randomColor = getRandomColor(colors);
      gsap.set(line, {
        background: colors[randomColor],
      });
    });
  }, []);

  useEffect(() => {
    if (!is_sidebar_open) {
      gsap.to(".link", { color: "#222" });
    }
  }, [is_sidebar_open]);

  return (
    <Wrapper>
      <div className="link-container">
        <div className="navbar-brand" onClick={() => closeSidebar()}>
          <Link to={"/"} className="navbar-brand" onClick={() => scrollToTop()}>
            G
          </Link>
        </div>
        <div className="col">
          <ul>{language === "eng" ? navLinksENG : navLinksHU}</ul>
        </div>
        {!is_sidebar_open ? (
          <GiHamburgerMenu
            className="icon icon-open"
            onClick={() => openSidebar()}
          />
        ) : (
          <AiOutlineCloseCircle
            className="icon icon-close"
            onClick={() => closeSidebar()}
          />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  z-index: 999;
  position: fixed;

  .link-container {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }

  .link {
    color: yellowgreen;
  }

  .navbar-brand {
    font-size: 4rem;
    margin: 0.5rem;
    margin-right: 0;
    color: #222;
  }

  .underline {
    margin: 0 auto;
    height: 3px;
    width: 20px;
    transition: all 0.5s;
  }

  .col,
  .navbar-brand {
    height: fit-content;
    align-self: center;
    padding: 0 1rem;
    ul {
      display: none;
      gap: 0 2rem;
      li {
        a {
          font-size: 1.5rem;
          padding: 0 1rem;
          color: #222;
        }
        &:hover .underline {
          width: 70px;
        }
      }
    }
  }

  .icon {
    font-size: 2rem;
    margin: 0.5rem 2rem;
    align-self: center;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: plum;
    }
  }

  @media screen and (min-width: 992px) {
    .col {
      ul {
        display: flex;
      }
    }

    .icon {
      display: none;
    }
  }
`;

export default Navbar;
