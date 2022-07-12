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
      <h2>{language === "eng" ? "projects" : "projektek"}</h2>
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
  min-height: 100vh;

  h2 {
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

  .project::before {
    z-index: 1;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -1.5%;
    width: 100%;
    height: 100%;
    background: rgb(12, 242, 93);
    background: -moz-linear-gradient(
      90deg,
      rgba(12, 242, 93, 1) 0%,
      rgba(242, 5, 92, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(12, 242, 93, 1) 0%,
      rgba(242, 5, 92, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(12, 242, 93, 1) 0%,
      rgba(242, 5, 92, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0cf25d",endColorstr="#f2055c",GradientType=1);
    transform: skew(45deg) translateX(100%);
    transition: all 0.9s;
  }

  .project::after {
    z-index: 1;
    content: "";
    display: block;
    position: absolute;
    top: -1.5%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(12, 242, 93);
    background: -moz-linear-gradient(
      90deg,
      rgba(12, 242, 93, 1) 0%,
      rgba(242, 5, 92, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(12, 242, 93, 1) 0%,
      rgba(242, 5, 92, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(12, 242, 93, 1) 0%,
      rgba(242, 5, 92, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0cf25d",endColorstr="#f2055c",GradientType=1);
    transform: skew(45deg) translateX(-100%);
    transition: all 0.9s;
  }

  .project:hover::before {
    left: -200%;
  }

  .project:hover::after {
    left: 200%;
  }

  .project-desc {
    display: flex;
    padding: 1rem 6rem;
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
    p {
    }
    a {
      padding: 1rem;
      margin-top: 0.5rem;
      border-radius: 25px;
      background: #222;
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
