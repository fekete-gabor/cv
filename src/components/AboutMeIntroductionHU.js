import React from "react";
import { AboutMeTechnologies } from "./index";

const AboutMeIntroductionHU = () => {
  return (
    <article>
      <h2 className="title">Szóval ki is vagyok valójában? </h2>
      <p className="paragraph">
        Helló, a nevem <span className="highlight">Gábor</span> és szeretek
        dolgokat készíteni amik a neten élnek.
      </p>
      <p className="paragraph">
        <span className="highlight">2015-ben</span> kezdett el foglalkoztatni a
        webfejlesztés, amikor létrehoztam az első{" "}
        <span className="highlight">WordPress</span> blogomat. Úgy tűnik
        gombokat nyomogatni és problémákat megoldani egész szórakoztató.
      </p>
      <p className="paragraph">
        Bár mindig is érdekelt, csak{" "}
        <span className="highlight">
          2021 júliusában kezdtem programozást tanulni
        </span>
        .
      </p>
      <p className="paragraph">
        Mióta elkezdtem ezt az utazást és elmélyítettem tudásom számos
        technológiában{" "}
        <span className="highlight">
          egyre kíváncsibb vagyok FRONT- és BACKEND iránt is.
        </span>
        , és izgatottan várom, hogy{" "}
        <span className="highlight">többet tanulhassak</span>.
      </p>
      <p className="paragraph">
        Jelenleg <span className="highlight">junior dev pozíciót keresek</span>,
        hogy beinduljon a karrierem és végre{" "}
        <span className="highlight">profiktól tanulhassak!</span>
      </p>
      <p className="paragraph">Néhány technológia amikkel nemrég dolgoztam:</p>
      <AboutMeTechnologies />
    </article>
  );
};

export default AboutMeIntroductionHU;
