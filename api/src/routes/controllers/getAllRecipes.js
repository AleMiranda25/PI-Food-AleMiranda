const axios = require("axios");
const { Recipe, Diets } = require("../../db");
const { API_KEY } = process.env;
// const URL_API = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;
const URL_ALTER = `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`;

const cleanData = (arr) =>
  arr.map((ele) => {
    return {
      id: ele.id,
      name: ele.title,
      image: ele.image,
      summary: ele.summary,
      healthScore: ele.healthScore,
      steps: ele.analyzedInstructions[0]?.steps
        .map((ele) => `${ele.number} ${ele.step}`)
        .join(""),
      diets: ele.diets?.map((element) => element),
    };
  });

// Traigo toda la info de la api
const getFromApi = async () => {
  try {
    const apiDataRaw = (await axios.get(URL_ALTER)).data.results;
    return cleanData(apiDataRaw);
  } catch (error) {
    return json({ error: error.message });
  }
};

// Traigo la info de la Base de Datos
const getFromDb = async () => {
  try {
    const getDB = await Recipe.findAll({
      include: {
        model: Diets,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    let obj = await getDB?.map((element) => {
      return {
        id: element.id,
        name: element.name,
        image: element.image,
        summary: element.summary,
        healthScore: element.healthScore,
        steps: element.steps,
        diets: element.diets?.map((diet) => diet.name),
      };
    });
    return obj;
  } catch (error) {
    return json({ error: error.message });
  }
};

module.exports = async () => {
  try {
    const objApi = await getFromApi();
    const objBase = await getFromDb();
    const allApiDb = await objApi.concat(objBase);
    return allApiDb;
  } catch (error) {
    return json({ error: error.message });
  }
};
