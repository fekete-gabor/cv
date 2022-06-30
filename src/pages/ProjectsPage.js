import React from "react";
import styled from "styled-components";

const ProjectsPage = () => {
  return (
    <Wrapper>
      <div className="">
        <h2>ProjectsPage</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: dodgerblue;
  h2 {
    color: black;
    font-size: 10rem;
  }
`;

export default ProjectsPage;
