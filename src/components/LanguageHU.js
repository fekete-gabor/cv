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
      gsap.to(".bg-colored-hu", { height: "100%" });
      gsap.to(".link-container-hu", { duration: 2, height: "100%" });
    });

    hu.addEventListener("mouseleave", () => {
      gsap.to(".bg-colored-hu", { height: "20%" });
      gsap.to(".link-container-hu", { duration: 2, height: "20%" });
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="img-container">
          <img
            src={huBG}
            alt="hu building colored"
            className="bg-colored bg-colored-hu"
          />
          <img
            src={huBG}
            alt="hu building gray"
            className="bg-gray bg-gray-hu"
          />
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
          <div className="underline-hu"></div>
        </div>
      </div>
    </>
  );
};

export default LanguageHU;
