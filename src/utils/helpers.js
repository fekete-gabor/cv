import { HashLink } from "react-router-hash-link";

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const getRandomColor = (colors) => {
  return Math.floor(Math.random() * colors.length);
};

const linksENG = [
  {
    id: 1,
    text: "about",
    scrollTo: "#aboutMe",
  },
  {
    id: 2,
    text: "my skills",
    scrollTo: "#mySkills",
  },
  {
    id: 3,
    text: "projects",
    scrollTo: "#myProjects",
  },
  {
    id: 4,
    text: "contacts",
    scrollTo: "#contacts",
  },
];

export const navLinksENG = linksENG.map((links) => {
  const { id, text, scrollTo } = links;
  return (
    <li key={id}>
      <HashLink to={scrollTo} className="link">
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
    scrollTo: "#aboutMe",
  },
  {
    id: 2,
    text: "skillek",
    scrollTo: "#mySkills",
  },
  {
    id: 3,
    text: "projektek",
    scrollTo: "#myProjects",
  },
  {
    id: 4,
    text: "elérhetőségek",
    scrollTo: "#contacts",
  },
];

export const navLinksHU = linksHU.map((links) => {
  const { id, text, scrollTo } = links;
  return (
    <li key={id}>
      <HashLink to={scrollTo} className="link">
        {text}
      </HashLink>
      <div className="underline"></div>
    </li>
  );
});
