import React from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main-context";
import { Link } from "react-router-dom";

const Error = () => {
  const { storage } = useMainContext();

  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h2>
          {storage === "eng" ? "page not found" : "az oldal nem található"}
        </h2>
        <Link to="/">
          <button>
            {storage === "eng" ? "return home" : "vissza a kezdőoldalra"}
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 15rem;
      color: #f2055c;
    }
    h2 {
      text-transform: capitalize;
    }
    button {
      border: solid 3px #222;
      font-size: 1.25rem;
      text-transform: capitalize;
      background-color: #222;
      color: #f25774;
      padding: 1rem;
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        border: solid 3px #ff9f82;
        background-color: black;
        color: #ff9f82;
      }
    }
  }
`;

export default Error;
