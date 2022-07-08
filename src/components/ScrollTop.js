import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap/dist/gsap";

const ScrollTop = () => {
  const { language } = useMainContext();
  const myRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = myRef.current;
    const text = textRef.current;
    const textHeight = text.getBoundingClientRect().height;

    gsap.set(".arrow", { y: "20" });
    gsap.set(text, { autoAlpha: 0, clipPath: "circle(0% at 50% 50%)" });

    const tl = gsap.timeline({ paused: true });

    tl.to(".arrow", { y: -textHeight / 2 }).to(
      text,
      { duration: 1, autoAlpha: 1, clipPath: "circle(100% at 50% 50%)" },
      0
    );

    container.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    container.addEventListener("mouseenter", () => {
      tl.play();
    });

    container.addEventListener("mouseleave", () => {
      tl.reverse();
    });
  }, [language]);

  return (
    <Wrapper ref={myRef}>
      <AiOutlineArrowUp className="arrow" />
      <p ref={textRef}>{language === "eng" ? "scroll up" : "lap tetejére"}</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 2rem;
  }
`;

export default ScrollTop;
