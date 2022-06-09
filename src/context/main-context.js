import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/main-reducer";
import { SET_LANGUAGE } from "../actions";

const checkStorage = () => {
  let storage = localStorage.getItem("language");
  if (storage) return JSON.parse(localStorage.getItem("language"));
  return [];
};

const initialState = {
  language: checkStorage(),
  is_loading: false,
  is_error: false,
  projects_load_begin: false,
  projects_load_success: false,
  projects_load_error: false,
  projects: [],
};

const MainContext = React.createContext();

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLanguage = (language) => {
    dispatch({ type: SET_LANGUAGE, payload: language });
  };

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(state.language));
  }, [state.language]);

  return (
    <MainContext.Provider
      value={{
        ...state,
        setLanguage,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(MainContext);
};
