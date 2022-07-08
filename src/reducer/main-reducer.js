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

const main_reducer = (state, action) => {
  if (action.type === SET_LANGUAGE) {
    return { ...state, language: action.payload, storage: action.payload };
  }

  if (action.type === OPEN_SIDEBAR) {
    return { ...state, is_sidebar_open: true };
  }

  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, is_sidebar_open: false };
  }

  if (action.type === FETCH_BEGIN) {
    return { ...state, is_loading: true };
  }

  if (action.type === FETCH_SUCCESS) {
    return {
      ...state,
      is_loading: false,
      projects: action.payload,
      is_error: false,
    };
  }

  if (action.type === FETCH_ERROR) {
    return { ...state, is_error: true };
  }

  if (action.type === COUNT_COMPONENTS) {
    return { ...state, all_component_index: action.payload };
  }

  if (action.type === SET_CURRENT_INDEX) {
    return { ...state, current_component_index: action.payload };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default main_reducer;
