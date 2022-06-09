import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/main-context";

const Dashboard = () => {
  const { setLanguage } = useMainContext();
  return (
    <Wrapper>
      <Link
        to="/"
        data-language="en"
        onClick={(e) => setLanguage(e.target.dataset.language)}
      >
        english
      </Link>
      <Link
        to="/"
        data-language="hu"
        onClick={(e) => setLanguage(e.target.dataset.language)}
      >
        hun
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #222;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  align-items: center;
  a {
    color: whitesmoke;
    text-decoration: none;
  }
`;

export default Dashboard;
