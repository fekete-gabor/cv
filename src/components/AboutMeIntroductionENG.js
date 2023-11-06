import React from "react";
import { AboutMeTechnologies } from "./index";

const AboutMeIntroductionENG = () => {
  return (
    <article>
      <h2 className="title">So, who am I?</h2>
      <p className="paragraph">
        Hello, I'm <span className="highlight">Gábor</span> and I like creating
        things that live on the web.
      </p>
      <p className="paragraph">
        My interest in web development{" "}
        <span className="highlight">started back in 2015</span>, when I
        published my first
        <span className="highlight"> WordPress</span> blog. Turns out pushing
        buttons and solving problems are pretty fun.
      </p>
      <p className="paragraph">
        Though I was interested before,{" "}
        <span className="highlight">
          I started to learn how to code in july of 2021
        </span>
        .
      </p>
      <p className="paragraph">
        Since I started this journey and deepend my knowledge in various
        technologies,{" "}
        <span className="highlight">
          I've got increasingly curious about both FRONT- AND BACKEND
        </span>
        , and I'm very <span className="highlight">excited to learn more</span>.
      </p>
      <p className="paragraph">
        I currently{" "}
        <span className="highlight">looking for a junior dev position</span> to
        kickstart my career and{" "}
        <span className="highlight">learn among professionals!</span>
      </p>
      <p className="paragraph">
        Here are few technologies I've been working with recently:
      </p>
      <AboutMeTechnologies />
    </article>
  );
};

export default AboutMeIntroductionENG;
