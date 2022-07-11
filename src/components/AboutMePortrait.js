import React from "react";
import styled from "styled-components";

const AboutMePortrait = () => {
  return (
    <Wrapper>
      <div className="portrait"></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .portrait {
    width: 80%;
    height: 80%;
    background-color: plum;
    position: relative;
  }

  .portrait::after {
    content: "";
    position: absolute;
    display: block;
    border: solid 2px yellowgreen;
    width: 100%;
    height: 100%;
    bottom: -20px;
    right: -20px;
    z-index: -1;
  }
`;

export default AboutMePortrait;
