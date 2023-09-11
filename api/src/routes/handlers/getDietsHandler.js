const getDiets = require("../controllers/getDiets");

/*
 *Obtiene un arreglo con todos los tipos de dietas existentes.
 *En una primera instancia, cuando no exista ninguna dieta, deberás precargar la base de datos con las dietas de la documentación.
 *Estas deben ser obtenidas de la API (se evaluará que no haya hardcodeo). Luego de obtenerlas de la API, deben ser guardadas en la base de datos para su posterior consumo desde allí.
 */
module.exports = async (req, res) => {
  try {
    const allDiets = await getDiets();

    res.status(200).json(allDiets);
  } catch (error) {
    res.status(404).send(error);
  }
};
