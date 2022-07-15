import React, { useEffect } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { language, projects } = useMainContext();

  useEffect(() => {
    gsap.utils.toArray(".project").forEach((project) => {
      const article = project.children[0];

      gsap.set([article, ".desc-item", ".desc-btn"], { autoAlpha: 0 });

      const tl = gsap.timeline({ paused: true });

      const anim = tl
        .fromTo(
          [article, ".desc-item"],
          { autoAlpha: 0 },
          { autoAlpha: 1, color: "white" },
          0
        )
        .fromTo(
          ".desc-btn",
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            color: "white",
            background: "#41BFB3",
          },
          0
        );

      project.addEventListener("mouseover", () => {
        anim.play();
      });

      project.addEventListener("mouseleave", () => {
        anim.reverse();
      });
    });
  }, [language]);

  return (
    <Wrapper className="comp">
      <h1>{language === "eng" ? "projects" : "projektek"}</h1>
      <div className="project-container">
        {projects.map((project) => {
          const { id } = project;
          const { title, link, technologies } = project.attributes;
          const img = project.attributes.img.data.attributes.url;

          return (
            <div
              key={id}
              className={`${id % 2 === 0 ? "even project" : "odd project"}`}
            >
              <article className="project-desc">
                <h3 className="desc-item">{title}</h3>
                <h4 className="desc-item">
                  {language === "eng"
                    ? "used technologies"
                    : "használt technológiák"}{" "}
                  -
                </h4>
                <p className="desc-item">{technologies}</p>
                <a href={`http://${link}`} target="_blank" className="desc-btn">
                  {language === "eng" ? "view project" : "tovább a projekthez"}
                </a>
              </article>
              <img src={img} alt="project thumbnail" className="project-img" />
            </div>
          );
        })}
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

  .project-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem;
    max-width: 1025px;
  }

  .project {
    position: relative;
    text-align: center;
    width: 100%;
    height: 400px;
    border-radius: 27px;
    margin: 1rem 0;
    background-color: #222;
    overflow: hidden;
    img {
      border-radius: 25px;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .odd {
    align-self: center;
  }

  .even {
    align-self: center;
  }

  .project-desc {
    display: flex;
    /* padding: 1rem 6rem; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #222;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* h3,
    h4,
    p {
      font-size: 1rem;
    } */
    a {
      padding: 1rem;
      margin-top: 0.5rem;
      border-radius: 25px;
    }
  }

  @media screen and (min-width: 600px) {
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
  }

  @media screen and (min-width: 1100px) {
    .project {
      width: 60%;
    }

    .odd {
      align-self: flex-end;
    }

    .even {
      align-self: flex-start;
    }

    .project-desc {
      padding: 10rem;

      p {
        font-size: 1.25rem;
      }
      a {
        font-size: 1rem;
      }
    }
  }
`;

export default Projects;
