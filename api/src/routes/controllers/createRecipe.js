const { Recipe, Diets } = require("../../db");

module.exports = async (recipeObject) => {
  try {
    const { name, summary, healthScore, steps, image, diets } = recipeObject;
    const myRecipe = {
      name,
      summary,
      healthScore,
      steps,
      image,
    };

    const createRecipe = await Recipe.create(myRecipe);
    createRecipe.addDiets(diets);

    return await Recipe.findAll();
  } catch (error) {
    return json({ error: error.message });
  }
};
