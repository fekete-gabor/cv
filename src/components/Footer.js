import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap/dist/gsap";

const Footer = () => {
  const { secondary_colors: colors } = useMainContext();
  const [date, setDate] = useState();

  const symbolRef = useRef(null);

  useEffect(() => {
    const date = new Date().getFullYear();
    setDate(date);
  }, []);

  useEffect(() => {
    const symbol = symbolRef.current;
    const tl = gsap.timeline({ repeat: "-1" });
    const firstColor = colors[0];

    gsap.set(symbol, { color: firstColor });

    tl.to(symbol, {
      duration: 4,
      keyframes: colors.map((color) => ({ color: color })),
    }).to(symbol, { color: firstColor });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: "-1" });

    gsap.utils.toArray(".left-dot").forEach((dot, i) => {
      tl.fromTo(dot, { background: "#222" }, { background: colors[i] }).to(
        dot,
        {
          background: "#222",
        }
      );
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: "-1" });

    gsap.utils.toArray(".right-dot").forEach((dot, i) => {
      gsap.set(".right-side", { rotate: "180deg" });
      tl.fromTo(dot, { background: "#222" }, { background: colors[i] }).to(
        dot,
        {
          background: "#222",
        }
      );
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <div className="left-side">
        <div className="left-dot"></div>
        <div className="left-dot"></div>
        <div className="left-dot"></div>
        <div className="left-dot"></div>
        <div className="left-dot"></div>
        <div className="left-dot"></div>
      </div>
      <div className="text-container">
        <h4>
          designed &amp; built by <span ref={symbolRef}>&#10084; </span>
          gábor fekete.
          <br />
          {date}
        </h4>
      </div>
      <div className="right-side">
        <div className="right-dot"></div>
        <div className="right-dot"></div>
        <div className="right-dot"></div>
        <div className="right-dot"></div>
        <div className="right-dot"></div>
        <div className="right-dot"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #222;
  gap: 1rem;

  .left-side,
  .right-side {
    gap: 0.5rem;
    display: flex;
    align-items: flex-start;
    padding: 1.7rem 0;
    height: 100%;
  }

  .right-side {
    align-items: flex-end;
  }

  .left-dot,
  .right-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .text-container {
    height: 100%;
    padding: 1.2rem 0;
    h4 {
      color: whitesmoke;
    }
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
    height: 100px;
  }
`;

export default Footer;
