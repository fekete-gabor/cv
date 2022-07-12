import { Link } from "react-router-dom";

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
    url: "/about",
  },
  {
    id: 2,
    text: "projects",
    url: "/projects",
  },
  {
    id: 3,
    text: "plans",
    url: "/plans",
  },
  {
    id: 4,
    text: "contacts",
    url: "/contacts",
  },
];

export const navLinksENG = linksENG.map((links) => {
  const { id, text, url } = links;
  return (
    <li key={id}>
      <Link to={url} className="link">
        {text}
      </Link>
      <div className="underline"></div>
    </li>
  );
});

const linksHU = [
  {
    id: 1,
    text: "rólam",
    url: "/about",
  },
  {
    id: 2,
    text: "projektek",
    url: "/projects",
  },
  {
    id: 3,
    text: "terveim",
    url: "/plans",
  },
  {
    id: 4,
    text: "elérhetőségek",
    url: "/contacts",
  },
];

export const navLinksHU = linksHU.map((links) => {
  const { id, text, url } = links;
  return (
    <li key={id}>
      <Link to={url} className="link">
        {text}
      </Link>
      <div className="underline"></div>
    </li>
  );
});
