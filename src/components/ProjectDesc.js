import React from "react";
import { useMainContext } from "../context/main-context";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import useMediaQuery from "../utils/mediaQuery";

const ProjectDesc = () => {
  const { language, projects } = useMainContext();

  const mediaQuery = useMediaQuery("(min-width: 920px)");

  return projects.map((project, i) => {
    const { id } = project;
    const {
      title,
      desc_eng,
      desc_hu,
      github,
      github_backend,
      link,
      technologies,
    } = project.attributes;

    const img = project.attributes.img.data.attributes.url;

    if (i % 2 === 0 && mediaQuery) {
      return (
        <section key={id} className="odd project">
          <div className="project-desc-container">
            <div className="project-title-container">
              <h3>{`0${i + 1} - ${title}`}</h3>
            </div>
            <article className="project-desc">
              <h4>{language === "eng" ? <>{desc_eng}</> : <>{desc_hu}</>}</h4>
              <p>{technologies}</p>
              <div className="project-btn-container">
                {github && (
                  <div className="odd-btn">
                    <a href={github} target="_blank" rel="noreferrer">
                      <BsGithub />
                    </a>
                    <h4>- frontend repo</h4>
                  </div>
                )}
                {github_backend && (
                  <div className="odd-btn">
                    <a href={github_backend} target="_blank" rel="noreferrer">
                      <BsGithub />
                    </a>
                    <h4>- backend repo</h4>
                  </div>
                )}
                <div className="odd-btn">
                  <a href={link} target="_blank" rel="noreferrer">
                    <BsBoxArrowUpRight />
                  </a>
                  <h4>- site link</h4>
                </div>
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
        <section key={id} className="even project">
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
                {github && (
                  <div>
                    <h4>frontend repo -</h4>
                    <a href={github} target="_blank" rel="noreferrer">
                      <BsGithub />
                    </a>
                  </div>
                )}
                {github_backend && (
                  <div>
                    <h4>backend repo -</h4>
                    <a href={github_backend} target="_blank" rel="noreferrer">
                      <BsGithub />
                    </a>
                  </div>
                )}
                <div>
                  <h4>site link -</h4>
                  <a href={link} target="_blank" rel="noreferrer">
                    <BsBoxArrowUpRight />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      );
    }
  });
};

export default ProjectDesc;
