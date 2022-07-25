import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/main-reducer";
import {
  SET_LANGUAGE,
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_ERROR,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  COUNT_COMPONENTS,
  SET_CURRENT_INDEX,
} from "../actions";

const checkLocalStorage = () => {
  const language = localStorage.getItem("language");
  if (language) return JSON.parse(localStorage.getItem("language"));
  return [];
};

const initialState = {
  language: "eng",
  storage: checkLocalStorage(),
  primary_colors: ["#D9A3B1", "#8C586B", "#0E1826", "#4A808C", "#EADEC7"],
  secondary_colors: [
    "#0049A6",
    "#F2522E",
    "#834CF5",
    "#1677F2",
    "#F20CCC",
    "#9F46A8",
  ],
  current_component_index: 0,
  all_components: "",
  is_sidebar_open: false,
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

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  const fetchProjects = async () => {
    dispatch({ type: FETCH_BEGIN });
    try {
      const response = await fetch(allProjectsUrl);
      const data = await response.json();
      const payload = data.data;
      dispatch({ type: FETCH_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: FETCH_ERROR });
    }
  };

  const countComponents = (number) => {
    dispatch({ type: COUNT_COMPONENTS, payload: number });
  };

  const setCurrentIndex = (index) => {
    dispatch({ type: SET_CURRENT_INDEX, payload: index });
  };

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(state.storage));
  }, [state.language, state.storage]);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <MainContext.Provider
      value={{
        ...state,
        setLanguage,
        openSidebar,
        closeSidebar,
        countComponents,
        setCurrentIndex,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(MainContext);
};
