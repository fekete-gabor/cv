import React, { useRef, useEffect } from "react";
import engBG from "../assets/gb.jpg";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";

const LanguageENG = () => {
  const { setLanguage } = useMainContext();

  const engRef = useRef(null);

  useEffect(() => {
    const eng = engRef.current;

    eng.addEventListener("mouseenter", () => {
      gsap.to(".bg-mask-eng", { height: "100%" });
      gsap.to(".link-container-mask-eng", { duration: 2, height: "100%" });
    });

    eng.addEventListener("mouseleave", () => {
      gsap.to(".bg-mask-eng", { height: "20%" });
      gsap.to(".link-container-mask-eng", { duration: 2, height: "20%" });
    });
  }, []);

  return (
    <div className="container">
      <div className="img-container">
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
      </div>
      <div className="link-container-mask link-container-mask-eng"></div>
      <div className="underline-eng"></div>
    </div>
  );
};

export default LanguageENG;
