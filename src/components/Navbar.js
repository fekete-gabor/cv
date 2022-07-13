import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import hungary from "../assets/hungary.png";
import uk from "../assets/united-kingdom.png";
import {
  getRandomValue,
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
    setLanguage,
  } = useMainContext();

  // navbar animation on scroll
  useEffect(() => {
    const linkContainer = document.querySelector(".link-container");
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        ScrollTrigger.create({
          start: "top top",
          end: 99999,
          onUpdate: (self) => {
            self.direction === -1
              ? gsap.to(linkContainer, {
                  duration: 1.5,
                  ease: "slow",
                  y: "0",
                })
              : gsap.to(linkContainer, {
                  duration: 1.5,
                  ease: "slow",
                  y: "-200%",
                });
          },
        });
      },
    });
  }, []);

  // give random color to link's underline
  useEffect(() => {
    gsap.utils.toArray(".underline").forEach((line) => {
      const randomColor = getRandomValue(colors);
      gsap.set(line, {
        background: colors[randomColor],
      });
    });
  }, []);

  // set link color if sidebar is closed
  useEffect(() => {
    if (!is_sidebar_open) {
      gsap.utils.toArray(".link").forEach((link) => {
        gsap.to(link, { color: "#222" });
      });
    }
  }, [is_sidebar_open]);

  return (
    <Wrapper>
      <div className="link-container">
        <div>
          <Link
            to={"/"}
            className="navbar-brand"
            onClick={() => {
              scrollToTop();
              closeSidebar();
            }}
          >
            G
          </Link>
        </div>
        <div className="col">
          <ul>
            {language === "eng" ? (
              <>
                {navLinksENG}
                <img
                  src={hungary}
                  alt="flag of hungary"
                  data-language="hu"
                  onClick={(e) => setLanguage(e.target.dataset.language)}
                />
              </>
            ) : (
              <>
                {navLinksHU}
                <img
                  src={uk}
                  alt="flag of united kingdom"
                  data-language="eng"
                  onClick={(e) => setLanguage(e.target.dataset.language)}
                />
              </>
            )}
          </ul>
        </div>
        <div className="icon-container">
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
      img {
        height: 30px;
        transform: translateY(5px);
        cursor: pointer;
      }
    }
  }

  .icon {
    font-size: 2rem;
    margin: 3rem;
    align-self: center;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: #ce5937;
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
