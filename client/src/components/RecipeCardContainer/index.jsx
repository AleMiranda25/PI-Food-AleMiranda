//Funcionalidad
import { useSelector } from "react-redux";
// Estilos
import "./module.css";
//Componentes
import RecipeCard from "../RecipeCard";

const RecipeCardContainer = () => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <div className="mainCard">
      {recipes.map((rec) => {
        return (
          <RecipeCard
            key={rec.id}
            image={rec.image}
            name={rec.name}
            diets={rec.diets}
          />
        );
      })}
    </div>
  );
};

export default RecipeCardContainer;
