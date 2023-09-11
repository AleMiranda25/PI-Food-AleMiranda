const { sequelize, json } = require("sequelize");
const axios = require("axios");
const { API_KEY } = process.env;
const getAllRecipes = require("../controllers/getAllRecipes");

// const cleanData = (arr) =>
//   arr.map((ele) => {
//     return {
//       id: ele.id,
//       name: ele.title,
//       summary: ele.summary,
//       healthScore: ele.healthScore,
//       image: ele.image,
//       steps: ele.analyzedInstructions[0]?.steps
//         .map((ele) => `${ele.number} ${ele.step}`)
//         .join(""),
//       diets: ele.diets?.map((element) => element),
//     };
//   });

module.exports = async (name) => {
  // const URL_API = `https://api.spoonacular.com/recipes/complexSearch?titleMatch=${name}?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;
  // const URL_ALTER = `https://run.mocky.io/v3/5453d6ca-8d60-46e4-9481-3dd8a34d60e0`;

  // const dbRecipes = await Recipe.findAll({
  //   where: { name: { [sequelize.Op.iLike]: `%${name}%` } },
  //   include: Diets,
  // });
  // Si no se encuentra en la base de datos local, consultar la API_ALTER
  // const apiRecipesRaw = (await axios.get(URL_ALTER)).data.results;
  // const apiRecipes = cleanData(apiRecipesRaw);
  // const filteredApi = apiRecipes.filter(
  //   (rec) => rec.name.toLowerCase().includes(name.toLowerCase())
  // );
  const recipeApiDb = await getAllRecipes();
  const result = await recipeApiDb.filter((el) =>
    el.name.toLowerCase().includes(name.toLowerCase())
  );
  if (result.length) return result;
  else throw Error("There is no coincidence");
};
