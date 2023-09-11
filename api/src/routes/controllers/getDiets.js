const axios = require("axios");
const { Diets } = require("../../db");
const { json } = require("sequelize");
const { API_KEY } = process.env;
// Defino las URLs de la API y la API para trabajar sin problemas
// const URL_API = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&diet=gluten free|katogenic|vegetarian|pescetarian|low fodmap&addRecipeInformation=true&number=100`;
const URL_ALTER = `https://run.mocky.io/v3/5453d6ca-8d60-46e4-9481-3dd8a34d60e0`;

module.exports = async () => {
  try {
    //Busca los tipos de dieta en la base de datos
    const dietsFromDB = await Diets.findAll();
    //Verifica si hay dietas en la base de datos
    if (dietsFromDB.length === 0) {
      //Obtiene datos de la API
      // const response = await axios.get(URL_API);
      const response = await axios.get(URL_ALTER);
      const myData = response.data.results;
      //Procesa los datos de la API
      // flatMap: Permite mapear cada elemento de un array a un nuevo array y luego aplanar el resultado en un solo array.
      const dietas = myData.flatMap((recipes) => recipes.diets);
      // Con el Set elimino los valores repetidos
      const uniqueDietas = [...new Set(dietas)];
      // mapeo todos los nombres de dietas con la propiedad name
      const dietsFromApi = uniqueDietas.map((diet) => ({ name: diet }));
      // Creo registros en la base de datos
      await Diets.bulkCreate(dietsFromApi);
      // retorno un listado de las dietas
      return dietsFromApi;
    } else {
      // Si ya hay tipos de dieta en la base de datos devuelve esos
      return dietsFromDB;
    }
  } catch (error) {
    // Maneja errores
    return json({ error: error.message });
  }
};
