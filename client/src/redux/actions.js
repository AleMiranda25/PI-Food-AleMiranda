import axios from "axios";
import { GET_RECIPE, GET_RECIPES } from "./actions-types";

// * PARA LAS RECETAS

// OBTIENE TODAS LAS RECETAS

const getRecipes = () => {
  return async function (dispatch) {
    const apiData = await axios.get("/recipes");
    const recipes = apiData.data?.results;
    dispatch({ type: GET_RECIPES, payload: recipes });
  };
};

const getRecipe = (id) => {
  return async function (dispatch) {
    let recipe = await axios.get(`/recipes/${id}`);
    dispatch({ type: GET_RECIPE, payload: recipe });
  };
};

// * PARA LAS DIETAS

const getDiets = (id) => {
  return async function (dispatch) {
    let recipe = await axios.get(`/diets`);
    dispatch({ type: GET_DIETS, payload: recipe });
  };
};

export { getRecipe, getRecipes, getDiets };
