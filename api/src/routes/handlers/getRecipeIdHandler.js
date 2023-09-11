const getRecipeById = require("../controllers/getRecipeById");

module.exports = async (req, res) => {
  //* NYI:
  //* Esta ruta obtiene el detalle de una receta específica.Es decir que devuelve un objeto con la información pedida en el detalle de una receta.
  //* La receta es recibida por parámetro (ID).
  //* Tiene que incluir los datos de los tipos de dietas asociados a la receta.
  //* Debe funcionar tanto para las recetas de la API como para las de la base de datos.
  const { id } = req.params;
  const source = isNaN(id) ? "db" : "api";
  try {
    //Obtenemos la receta de la base de datos
    const recipe = await getRecipeById(id, source);
    //Devolvemos la receta con los datos de los tipos de dietas asociados
    res.status(200).json(recipe);
  } catch (error) {
    //Si hay un error, lo devolvemos
    res.status(400).json({ error: error.message });
  }
};
