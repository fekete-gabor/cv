import React from "react";
import { AboutMeTechnologies } from "./index";

const AboutMeIntroductionENG = () => {
  return (
    <article>
      <h2 className="title">Hello! I'm Gábor,</h2>
      <p className="paragraph">
        and I'm passionate about learning, improving myself and building things
        that live on the web.
      </p>
      <p className="paragraph">
        I was born in 1989 and since many kids from that era, I grew up playing
        video games. As time went on{" "}
        <span className="highlight">I got increasingly curious</span>, how can
        one even communicate with a machine?
      </p>
      <p className="paragraph">
        Though I was always interested, I only started to learn how to code in
        <span className="highlight"> july of 2021</span>. I'm completely self
        taught. Since I started my journey and{" "}
        <span className="highlight">
          deepend my knowledge in various technologies
        </span>{" "}
        my thirst for knowledge, is not only unsatiated,{" "}
        <span className="highlight">
          I'm even more enthusiastic about both FRONT- and BACKEND
        </span>
        .
      </p>
      <p className="paragraph">
        <span className="highlight">
          I'm now looking for a junior dev position
        </span>{" "}
        to finally kick start my new career and learn among professionals. In
        the meantime, <span className="highlight">I'm keep on improving</span>.
      </p>
      <p className="paragraph">
        Here are few technologies I've been working with recently:
      </p>
      <AboutMeTechnologies />
    </article>
  );
};

export default AboutMeIntroductionENG;
