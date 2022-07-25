import { HashLink } from "react-router-hash-link";
import vue from "../assets/vue.png";
import angular from "../assets/angular.png";
import nuxt from "../assets/nuxt.png";
import gatsby from "../assets/gatsby.png";
import gulp from "../assets/gulp.png";
import node from "../assets/node.png";
import php from "../assets/php.png";
import svelte from "../assets/svelte.png";
import typescript from "../assets/typescript.png";
import python from "../assets/python.png";
import graphql from "../assets/graphql.png";

export const logos = [
  vue,
  python,
  angular,
  nuxt,
  gatsby,
  gulp,
  graphql,
  node,
  php,
  typescript,
  svelte,
];

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const getRandomValue = (array) => {
  return Math.floor(Math.random() * array.length);
};

const linksENG = [
  {
    id: 1,
    text: "about",
    path: "#about",
  },
  {
    id: 2,
    text: "projects",
    path: "#projects",
  },
  {
    id: 3,
    text: "plans",
    path: "#plans",
  },
  {
    id: 4,
    text: "contacts",
    path: "#contacts",
  },
];

export const navLinksENG = linksENG.map((links) => {
  const { id, text, path } = links;
  return (
    <li key={id}>
      <HashLink to={path} className="link">
        {text}
      </HashLink>
      <div className="underline"></div>
    </li>
  );
});

const linksHU = [
  {
    id: 1,
    text: "rólam",
    path: "#about",
  },
  {
    id: 2,
    text: "projektek",
    path: "#projects",
  },
  {
    id: 3,
    text: "terveim",
    path: "#plans",
  },
  {
    id: 4,
    text: "elérhetőségek",
    path: "#contacts",
  },
];

export const navLinksHU = linksHU.map((links) => {
  const { id, text, path } = links;
  return (
    <li key={id}>
      <HashLink to={path} className="link">
        {text}
      </HashLink>
      <div className="underline"></div>
    </li>
  );
});
