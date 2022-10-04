import React, { useRef, useEffect } from "react";
import huBG from "../assets/hu.jpg";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";

const LanguageHU = () => {
  const { setLanguage } = useMainContext();

  const huRef = useRef(null);

  useEffect(() => {
    const hu = huRef.current;

    hu.addEventListener("mouseenter", () => {
      gsap.to(".bg-mask-hu", { height: "100%" });
      gsap.to(".link-container-mask-hu", { duration: 2, height: "100%" });
    });

    hu.addEventListener("mouseleave", () => {
      gsap.to(".bg-mask-hu", { height: "20%" });
      gsap.to(".link-container-mask-hu", { duration: 2, height: "20%" });
    });
  }, []);

  return (
    <div className="container">
      <div className="img-container">
        <img
          src={huBG}
          alt="hu building colored"
          className="bg-mask bg-mask-hu"
        />
        <img src={huBG} alt="hu building gray" className="bg bg-hu" />
      </div>
      <div className="link-container link-container-hu">
        <Link
          to="/"
          data-language="hu"
          ref={huRef}
          onClick={(e) => setLanguage(e.target.dataset.language)}
        >
          Magyar
        </Link>
      </div>
      <div className="link-container-mask link-container-mask-hu"></div>
      <div className="underline-hu"></div>
    </div>
  );
};

export default LanguageHU;
