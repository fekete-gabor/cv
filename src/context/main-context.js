import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/main-reducer";
import { SET_LANGUAGE } from "../actions";

const initialState = {
  language: "",
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
