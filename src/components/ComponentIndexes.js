import React, { useEffect } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap/dist/gsap";

const ComponentIndexes = () => {
  const { current_component_index, all_components, setCurrentIndex } =
    useMainContext();

  useEffect(() => {
    gsap.utils.toArray(".index-box").forEach((box, i) => {
      const tl = gsap.timeline();

      gsap.set(box, {
        borderRadius: "0%",
        scale: 1.15,
        rotate: "45deg",
        background: "#2A8C82",
      });

      if (current_component_index === i) {
        tl.fromTo(
          box,
          {
            background: "#2A8C82",
          },
          {
            duration: 1,
            borderRadius: "50%",
            background: "orange",
          }
        );
      } else {
        tl.to(box, {
          duration: 1,
          borderRadius: "0%",
          background: "#2A8C82",
        });
      }
    });
  }, [current_component_index]);

  const scrollIntoView = (component) => {
    component.scrollIntoView();
  };

  return (
    <Wrapper>
      {all_components &&
        all_components.map((component, i) => {
          return (
            <div
              key={i}
              className="index-box"
              onClick={() => {
                setCurrentIndex(i);
                scrollIntoView(component);
              }}
            ></div>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  height: fit-content;
  position: fixed;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  .index-box {
    display: none;
    margin: 1rem 0;
    width: 10px;
    height: 10px;
    cursor: pointer;
  }

  @media screen and (min-width: 1100px) {
    .index-box {
      display: flex;
    }
  }
`;

export default ComponentIndexes;
