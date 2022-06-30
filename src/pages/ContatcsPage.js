import React from "react";
import styled from "styled-components";
import { Contacts } from "../components";

const ContactsPage = () => {
  return (
    <Wrapper>
      <Contacts />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

export default ContactsPage;
