import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CustomInput, CustomTextArea } from "./index";
import { Form, Formik } from "formik";
import schemaENG from "../schemas/schemaENG";
import schemaHU from "../schemas/schemaHU";
import { useMainContext } from "../context/main-context";

const Contacts = () => {
  const { language } = useMainContext();
  const [serverState, setServerState] = useState();

  const formEndpoint = process.env.REACT_APP_FORM_ENDPOINT;

  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: formEndpoint,
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Thanks!");
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <Wrapper className="comp" id="contacts">
      <h1>{language === "eng" ? "contact me" : "elérhetőségek"}</h1>
      <Formik
        initialValues={{ name: "", email: "", phoneNumber: "", message: "" }}
        validationSchema={language === "eng" ? schemaENG : schemaHU}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className="form-container">
                <div className="form-control">
                  <CustomInput
                    label={language === "eng" ? "name" : "név"}
                    name="name"
                    type="text"
                  />
                </div>
                <div className="form-control">
                  <CustomInput label="email" name="email" type="text" />
                </div>
                <div className="form-control">
                  <CustomInput
                    label={language === "eng" ? "phone number" : "telefonszám"}
                    name="phoneNumber"
                    type="number"
                  />
                </div>
                <div className="form-control">
                  <CustomTextArea
                    label={language === "eng" ? "message" : "üzenet"}
                    name="message"
                    type="textarea"
                  />
                </div>
                <div className="btn-container">
                  <button type="submit" disabled={isSubmitting} className="btn">
                    <h3>{language === "eng" ? "submit" : "küldés"}</h3>
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 3rem 0.5rem 0;
  z-index: 1;

  h1 {
    text-transform: capitalize;
    text-align: center;
  }

  .form-container {
    margin: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: var(--font-family-cursive);
  }

  form {
    textarea {
      resize: none;
    }
  }

  .form-control {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1rem;
    label {
      font-size: 1.2rem;
      text-transform: capitalize;
    }
  }

  input {
    height: 50px;
  }

  input,
  textarea {
    width: 35vw;
    font-size: 1rem;
    padding: 0.5rem;
    text-transform: lowercase;
    letter-spacing: 1px;
    border: none;
    border-bottom: solid 3px burlywood;
    transition: var(--transition);
    &:focus {
      border-bottom: solid 3px orange;
      outline: none;
    }
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .input-error {
    border-bottom: solid 3px red;
  }

  .error-message {
    p {
      font-size: 1.25rem;
      color: red;
    }
  }

  .btn-container {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    button {
      cursor: pointer;
      background: transparent;
      border: none;
      font-size: 1.25rem;
      text-transform: capitalize;
      color: #f25774;
      padding: 1rem;
      transition: var(--transition);
      &:hover {
        color: darkorchid;
      }
      h3 {
        text-transform: capitalize;
        margin: 0;
        z-index: 1;
      }
    }
  }

  @media screen and (min-width: 500px) {
    form {
      .form-control {
        .form-input {
          width: 100%;
          font-size: 1.1rem;
          padding: 0.5rem 2rem;
          letter-spacing: 3px;
        }
      }
    }
  }
`;

export default Contacts;
