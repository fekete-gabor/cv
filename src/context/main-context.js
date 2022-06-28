import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/main-reducer";
import {
  SET_LANGUAGE,
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from "../actions";

const initialState = {
  language: "en",
  primary_colors: ["#D9A3B1", "#8C586B", "#0E1826", "#4A808C", "#EADEC7"],
  secondary_colors: [
    "#0049A6",
    "#1677F2",
    "#834CF5",
    "#F20CCC",
    "#F2522E",
    "#9F46A8",
  ],
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

  const getRandomColor = (colors) => {
    return Math.floor(Math.random() * colors.length);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <MainContext.Provider
      value={{
        ...state,
        setLanguage,
        getRandomColor,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(MainContext);
};
