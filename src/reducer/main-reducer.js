import {
  SET_LANGUAGE,
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from "../actions";

const main_reducer = (state, action) => {
  if (action.type === SET_LANGUAGE) {
    return { ...state, language: action.payload };
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

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default main_reducer;
