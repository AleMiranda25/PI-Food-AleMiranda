//Estilos
import "./module.css";
//Componentes
import RecipeCardContainer from "../../components/RecipeCardContainer";

const Home = () => {
  return (
    <div>
      <div className="tituloHome"></div>

      <div className="recipeContainer">
        <RecipeCardContainer />
      </div>
    </div>
  );
};
export default Home;
