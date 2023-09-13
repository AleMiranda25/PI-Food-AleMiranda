//Estilos
import "./module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";
//Componentes
import RecipeCardContainer from "../../components/RecipeCardContainer";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

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
