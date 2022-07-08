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
        rotate: "45deg",
        background: "#05C7F2",
        border: "solid 3px transparent",
      });

      if (current_component_index === i) {
        tl.fromTo(
          box,
          {
            background: "#05C7F2",
            border: "solid 3px transparent",
          },
          {
            borderRadius: "50%",
            background: "orange",
            border: "solid 0.5px black",
          }
        );
      } else {
        tl.to(box, {
          borderRadius: "0%",
          background: "#05C7F2",
          border: "solid 0.5px transparent",
        });
      }
    });
  }, [current_component_index]);

  const scroll = (component) => {
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
                scroll(component);
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

  .index-box {
    margin: 1rem 0;
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
`;

export default ComponentIndexes;
