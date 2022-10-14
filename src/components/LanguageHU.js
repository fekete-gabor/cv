import React, { useRef, useEffect } from "react";
import huBG from "../assets/hu.jpg";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap";

const LanguageHU = ({ active }) => {
  const { setLanguage } = useMainContext();

  const huRef = useRef(null);

  useEffect(() => {
    const hu = huRef.current;
    if (active) {
      hu.addEventListener("mouseenter", () => {
        gsap.to(".mask-container-hu", {
          duration: 1.5,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        });
        gsap.to(".link-container-mask-hu", { duration: 2, height: "100%" });
      });

      hu.addEventListener("mouseleave", () => {
        gsap.to(".mask-container-hu", {
          duration: 1.5,
          clipPath: "polygon(0% 40%, 100% 40%, 100% 60%, 0% 60%)",
        });
        gsap.to(".link-container-mask-hu", { duration: 2, height: "20%" });
      });
    }
  }, [active]);

  return (
    <div className="container">
      <div className="img-container img-container-hu">
        <div className="mask-container mask-container-hu">
          <img
            src={huBG}
            alt="hu building colored"
            className="bg-mask bg-mask-hu"
          />
        </div>
        <img src={huBG} alt="hu building gray" className="bg bg-hu" />
      </div>
      <div
        className="link-container link-container-hu"
        ref={huRef}
        data-language="hu"
        onClick={(e) => setLanguage(e.target.dataset.language)}
      >
        <Link to="/" data-language="hu">
          Magyar
        </Link>
        <div className="underline-hu"></div>
      </div>
      <div className="link-container-mask link-container-mask-hu"></div>
    </div>
  );
};

export default LanguageHU;
