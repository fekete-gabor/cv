import React from "react";
import { AboutMeTechnologies } from "./index";

const AboutMeIntroductionHU = () => {
  return (
    <article>
      <h2 className="title">Helló! Gábor vagyok, </h2>
      <p className="paragraph">
        szenvedélyem a tanulás, az önfejlesztés, és olyan dolgok készítése amik
        a neten élnek.
      </p>
      <p className="paragraph">
        1989-ben születtem és mint sok más gyerek abból az időszakból, én is
        videójátékokat játszva nőttem föl. Az idő múlásával{" "}
        <span className="highlight">egyre kíváncsibb lettem</span>, egyáltalán
        hogy lehet egy géppel kommunikálni?
      </p>
      <p className="paragraph">
        Bár mindig is érdekelt, csak{" "}
        <span className="highlight">2021 júliusában</span> kezdtem tanulni, hogy
        kell programozni. Eddig teljesen önállóan tanultam. Mióta elkezdtem ezt
        az utazást és{" "}
        <span className="highlight">
          elmélyítettem tudásom különböző technológiákban
        </span>{" "}
        a tudás iránti vágyam, nemhogy enyhült volna,
        <span className="highlight">
          csak még lelkesebb vagyok a FRONT- és BACKEND iránt
        </span>
        .
      </p>
      <p className="paragraph">
        <span className="highlight">Most egy junior dev pozíciót keresek</span>,
        hogy végre beinduljon a karrierem és végre profiktól is tanulhassak.
        Addig is, tovább fejlődök.
      </p>
      <p className="paragraph">Néhány technológia amikkel nemrég dolgoztam:</p>
      <AboutMeTechnologies />
    </article>
  );
};

export default AboutMeIntroductionHU;
