import { HashLink } from "react-router-hash-link";

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const getRandomValue = (colors) => {
  return Math.floor(Math.random() * colors.length);
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
