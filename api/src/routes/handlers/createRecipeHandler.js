const createRecipe = require("../controllers/createRecipe");
/*
 *Esta ruta recibirá todos los datos necesarios para crear una nueva receta y relacionarla con los tipos de dieta solicitados.
 *Toda la información debe ser recibida por body.
 *Debe crear la receta en la base de datos, y esta debe estar relacionada con los tipos de dieta indicados (al menos uno).
 */
module.exports = async (req, res) => {
  try {
    // Obtengo los datos necesarios y los almaceno en un objeto
    const objRecipe = req.body;
    // Creo una nueva receta con los datos de la receta y las dietas relacionadas mediante el controller
    const newRecipe = await createRecipe(objRecipe);
    // Envio la respuesta exitosa junto con la nueva receta
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
