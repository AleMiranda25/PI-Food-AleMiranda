import axios from "axios";
import { GET_RECIPE, GET_RECIPES, GET_DIETS } from "./actions-types";
const URL_ALTER = `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`;
// * PARA LAS RECETAS

// OBTIENE TODAS LAS RECETAS

const getRecipes = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`/recipes`);
    const recipes = apiData.data;
    console.log(recipes);
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

const getDiets = () => {
  return async function (dispatch) {
    let response = await axios.get(`/diets`);
    let diets = response.data;
    console.log(diets);
    dispatch({ type: GET_DIETS, payload: diets });
  };
};

export { getRecipe, getRecipes, getDiets };
