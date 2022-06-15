import { SET_LANGUAGE } from "../actions";

const main_reducer = (state, action) => {
  if (action.type === SET_LANGUAGE) {
    return { ...state, language: action.payload };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default main_reducer;
