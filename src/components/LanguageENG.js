import React, { useRef, useEffect } from "react";
import engBG from "../assets/gb.jpg";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";

const LanguageENG = ({ active }) => {
  const { setLanguage } = useMainContext();
  const engRef = useRef(null);

  useEffect(() => {
    const eng = engRef.current;
    if (active) {
      eng.addEventListener("mouseenter", () => {
        gsap.to(".bg-mask-eng", { stagger: 2, height: "100%" });
        gsap.to(".link-container-mask-eng", { duration: 2, height: "100%" });
      });

      eng.addEventListener("mouseleave", () => {
        gsap.to(".bg-mask-eng", { height: "20%" });
        gsap.to(".link-container-mask-eng", { duration: 2, height: "20%" });
      });
    }
  }, [active]);

  return (
    <div className="container">
      <div className="img-container img-container-eng">
        <img
          src={engBG}
          alt="double decker colored"
          className="bg-mask bg-mask-eng"
        />
        <img src={engBG} alt="double decker gray" className="bg bg-eng" />
      </div>
      <div className="link-container link-container-eng">
        <Link
          to="/"
          data-language="eng"
          ref={engRef}
          onClick={(e) => setLanguage(e.target.dataset.language)}
        >
          English
        </Link>
        <div className="underline-eng"></div>
      </div>
      <div className="link-container-mask link-container-mask-eng"></div>
    </div>
  );
};

export default LanguageENG;
