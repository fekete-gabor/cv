import React from "react";
import styled from "styled-components";
import { ProjectDesc } from "./index";
import { useMainContext } from "../context/main-context";

const Projects = () => {
  const { language } = useMainContext();

  return (
    <Wrapper className="comp" id="projects">
      <h1>{language === "eng" ? "projects" : "projektek"}</h1>
      <div className="project-container">
        <ProjectDesc />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding: 3rem 0.5rem;

  h1 {
    text-transform: capitalize;
    text-align: center;
  }

  .project {
    display: grid;
    margin: 3rem auto;
    position: relative;
    overflow: hidden;
    gap: 1rem;
    border-radius: 27px;
    background-color: #222;
    font-family: var(--font-family-cursive);
    img {
      border-radius: 25px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .project-title-container {
    h3 {
      color: dodgerblue;
    }
  }

  .even {
    text-align: right;
    justify-content: flex-end;
  }

  .odd {
    text-align: left;
    justify-content: flex-start;
  }

  .project-desc-container {
    padding: 0.5rem;
    display: grid;
    align-items: center;
    position: relative;
  }

  .project-desc {
    width: 75%;
    h4 {
      color: whitesmoke;
      font-weight: 500;
    }
    p {
      color: goldenrod;
      font-size: 1.2rem;
    }
    a {
      z-index: 1;
      cursor: pointer;
      font-size: 2rem;
      color: darkorchid;
      transition: var(--transition);
      &:hover {
        color: hotpink;
      }
    }
  }

  .project-btn-container {
    gap: 2rem;
    display: flex;
    margin-top: 1rem;
  }

  @media screen and (min-width: 400px) {
    .project-desc-container {
      padding: 2rem;
    }
  }

  @media screen and (min-width: 600px) {
    .project {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      max-width: 70vw;
    }
  }

  @media screen and (min-width: 1200px) {
    .project {
      height: 500px;
      &:hover .project-title-container {
        transition: var(--transition);
        opacity: 0;
      }
      &:hover .project-desc {
        transition: var(--transition);
        opacity: 1;
      }
    }
    .project-title-container {
      position: absolute;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: var(--transition);
    }
    .project-desc {
      opacity: 0;
    }
    .project::before {
      z-index: 1;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(242, 5, 221);
      background: -moz-linear-gradient(
        90deg,
        rgba(242, 5, 221, 0.5) 50%,
        rgba(12, 74, 242, 0.5) 50%
      );
      background: -webkit-linear-gradient(
        90deg,
        rgba(242, 5, 221, 0.5) 50%,
        rgba(12, 74, 242, 0.5) 50%
      );
      background: linear-gradient(
        90deg,
        rgba(242, 5, 221, 0.5) 50%,
        rgba(12, 74, 242, 0.5) 50%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f205dd",endColorstr="#0c4af2",GradientType=1);
      transform: skew(45deg) translateX(100%);
      transition: all 0.9s;
    }

    .project::after {
      z-index: 1;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(242, 5, 221);
      background: -moz-linear-gradient(
        90deg,
        rgba(242, 5, 221, 0.5) 50%,
        rgba(12, 74, 242, 0.5) 50%
      );
      background: -webkit-linear-gradient(
        90deg,
        rgba(242, 5, 221, 0.5) 50%,
        rgba(12, 74, 242, 0.5) 50%
      );
      background: linear-gradient(
        90deg,
        rgba(242, 5, 221, 0.5) 50%,
        rgba(12, 74, 242, 0.5) 50%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f205dd",endColorstr="#0c4af2",GradientType=1);
      transform: skew(45deg) translateX(-100%);
      transition: all 0.9s;
    }

    .project:hover::before {
      left: -200%;
    }

    .project:hover::after {
      left: 200%;
    }
    .project-title-container {
      padding: 1rem;
    }
  }
`;

export default Projects;
