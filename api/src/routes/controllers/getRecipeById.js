const axios = require("axios");
const { Recipe, Diets } = require("../../db");
const { API_KEY } = process.env;

const dataFilter = (obj) => {
  return {
    id: obj.id,
    name: obj.title,
    image: obj.image,
    summary: obj.summary,
    healthScore: obj.healthScore,
    steps: obj.analyzedInstructions[0]?.steps
      .map((ele) => `${ele.number} ${ele.step}`)
      .join(""),
    diets: obj.diets?.map((element) => element),
  };
};

module.exports = async (idRecipe, source) => {
  // Defino las URLs de la API y la API de respaldo
  const URL_API = `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}&addRecipeInformation=true`;
  const URL_ALTER = `https://run.mocky.io/v3/5453d6ca-8d60-46e4-9481-3dd8a34d60e0`;

  if (source === "api") {
    // PARA LA URL_API
    //const searchResult = (await axios.get(URL_API)).data;

    // PARA EL MOCK
    const apiInfo = (await axios.get(URL_ALTER)).data.results;

    const searchResult = apiInfo.find((ele) => ele.id == idRecipe);

    return dataFilter(searchResult);
  } else {
    const foundRecipe = await Recipe.findByPk(idRecipe, {
      include: {
        model: Diets,
        as: "diets",
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    return foundRecipe;
  }
};
