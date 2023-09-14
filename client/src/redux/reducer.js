import { GET_DIETS, GET_RECIPES } from "./actions-types";

const initialState = {
  recipes: [],
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload };
    case GET_DIETS:
      return { ...state, diets: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
