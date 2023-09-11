const getAllRecipes = require("../controllers/getAllRecipes");
const getRecipesByName = require("../controllers/getRecipesByName");
//* NYI:
//* Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query.
//* (No es necesario que sea una coincidencia exacta).
//* Debe poder buscarla independientemente de mayúsculas o minúsculas.
//* Si no existe la receta, debe mostrar un mensaje adecuado.
//* Debe buscar tanto las de la API como las de la base de datos.

module.exports = async (req, res) => {
  // recibo el nombre por query
  const { name } = req.query;
  try {
    const results = name ? await getRecipesByName(name) : await getAllRecipes();
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
