// Funcionalidad
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDiets, getRecipes } from "../../redux/actions";

//Estilos
import "./module.css";
//Componentes
import RecipeCardContainer from "../../components/RecipeCardContainer";
import FilterItems from "../../components/FilterItems";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div>
      <FilterItems />
      <div className="recipeContainer">
        <RecipeCardContainer />
      </div>
    </div>
  );
};
export default Home;
