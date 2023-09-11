//Estilos
import "./module.css";
//Componentes
import RecipeCardContainer from "../../components/RecipeCardContainer";

const Home = () => {
  return (
    <div className="recipeContainer">
      <h1>Esta es la vista de HOME</h1>
      <RecipeCardContainer />
    </div>
  );
};
export default Home;
