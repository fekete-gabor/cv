import React from "react";
import { useMainContext } from "../context/main-context";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import useMediaQuery from "../utils/mediaQuery";

const ProjectDesc = () => {
  const { language, projects } = useMainContext();

  const mediaQuery = useMediaQuery("(min-width: 1166px)");

  return projects.map((project, i) => {
    const { id } = project;
    const { title, desc_eng, desc_hu, github, link, technologies } =
      project.attributes;
    const img = project.attributes.img.data.attributes.url;

    if (id % 2 === 0 && mediaQuery) {
      return (
        <section
          key={id}
          className={`${id % 2 === 0 ? "even project" : "odd project"}`}
        >
          <div className="project-desc-container">
            <div className="project-title-container">
              <h3>{`0${i + 1} - ${title}`}</h3>
            </div>
            <article className="project-desc">
              <h4>{language === "eng" ? <>{desc_eng}</> : <>{desc_hu}</>}</h4>
              <p>{technologies}</p>
              <div
                className={`${id % 2 === 0 && "even project-btn-container"}`}
              >
                <a href={github} target="_blank">
                  <BsGithub />
                </a>
                <a href={link} target="_blank">
                  <BsBoxArrowUpRight />
                </a>
              </div>
            </article>
          </div>
          <div className="project-img-container">
            <img src={img} alt="project thumbnail" />
          </div>
        </section>
      );
    } else {
      return (
        <section key={id} className="project">
          <div className="project-img-container">
            <img src={img} alt="project thumbnail" />
          </div>
          <div className="project-desc-container">
            <div className="project-title-container">
              <h3>{`0${i + 1} - ${title}`}</h3>
            </div>
            <article className="project-desc">
              <h4>{language === "eng" ? <>{desc_eng}</> : <>{desc_hu}</>}</h4>
              <p>{technologies}</p>
              <div className="project-btn-container">
                <a href={github} target="_blank">
                  <BsGithub />
                </a>
                <a href={link} target="_blank">
                  <BsBoxArrowUpRight />
                </a>
              </div>
            </article>
          </div>
        </section>
      );
    }
  });
};

export default ProjectDesc;
