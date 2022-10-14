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
        gsap.to(".mask-container-eng", {
          duration: 1.5,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        });
        gsap.to(".link-container-mask-eng", { duration: 2, height: "100%" });
      });

      eng.addEventListener("mouseleave", () => {
        gsap.to(".mask-container-eng", {
          duration: 1.5,
          clipPath: "polygon(0% 40%, 100% 40%, 100% 60%, 0% 60%)",
        });
        gsap.to(".link-container-mask-eng", { duration: 2, height: "20%" });
      });
    }
  }, [active]);

  return (
    <div className="container">
      <div className="img-container img-container-eng">
        <div className="mask-container mask-container-eng">
          <img
            src={engBG}
            alt="double decker colored"
            className="bg-mask bg-mask-eng"
          />
        </div>
        <img src={engBG} alt="double decker gray" className="bg bg-eng" />
      </div>
      <div
        className="link-container link-container-eng"
        ref={engRef}
        data-language="eng"
        onClick={(e) => setLanguage(e.target.dataset.language)}
      >
        <Link to="/" data-language="eng">
          English
        </Link>
        <div className="underline-eng"></div>
      </div>
      <div className="link-container-mask link-container-mask-eng"></div>
    </div>
  );
};

export default LanguageENG;
