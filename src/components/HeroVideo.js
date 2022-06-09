import React from "react";
import styled from "styled-components";
import bg from "../assets/bg.mp4";

const HeroVideo = () => {
  return (
    <Wrapper>
      <video
        src={bg}
        type="video/mp4"
        className="video"
        autoPlay
        loop
        muted
      ></video>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default HeroVideo;
