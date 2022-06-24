import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/main-reducer";
import {
  SET_LANGUAGE,
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from "../actions";

const initialState = {
  language: "",
  is_loading: false,
  is_error: false,
  projects_load_begin: false,
  projects_load_success: false,
  projects_load_error: false,
  projects: [],
};

const allProjectsUrl = process.env.REACT_APP_ALL_PROJECTS;

const MainContext = React.createContext();

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLanguage = (language) => {
    dispatch({ type: SET_LANGUAGE, payload: language });
  };

  const fetchProjects = async () => {
    dispatch({ type: FETCH_BEGIN });
    try {
      const response = await fetch(`${allProjectsUrl}`);
      const data = await response.json();
      const payload = data.data;
      dispatch({ type: FETCH_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: FETCH_ERROR });
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

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
