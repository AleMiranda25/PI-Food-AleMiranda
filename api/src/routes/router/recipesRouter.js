const { Router } = require("express");
const createRecipeHandler = require("../handlers/createRecipeHandler");
const getRecipeIdHandler = require("../handlers/getRecipeIDHandler");
const getRecipesHandler = require("../handlers/getRecipesHandler");

const recipesRouter = Router();

const validateCreate = (req, res, next) => {
  const { name, diets, steps } = req.body;
  if (!name || !diets || !steps)
    res.status(400).json({ error: "Missing data" });
  next();
};
//* Obtiene una receta especifica
recipesRouter.get("/:id", getRecipeIdHandler);
//* Maneja como se obtienen las recetas
recipesRouter.get("/", getRecipesHandler);
//* Crea una receta
recipesRouter.post("/", validateCreate, createRecipeHandler);

module.exports = recipesRouter;
