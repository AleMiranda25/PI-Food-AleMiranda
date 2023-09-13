//Funcionalidad
import { useSelector } from "react-redux";
// Estilos
import "./module.css";
//Componentes
import RecipeCard from "../RecipeCard";

const RecipeCardContainer = () => {
  // const test = [
  //   {
  //     id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
  //     name: "My Recipe soup",
  //     image:
  //       "https://media.istockphoto.com/id/1349383878/es/foto/pizza-hawaiana-con-jam%C3%B3n-y-pi%C3%B1a.jpg?s=1024x1024&w=is&k=20&c=6QMaT_zY84XmSR0P6_lteE5eguFs1Y9ibaPY4T4ApSk=",
  //     summary: "This is the resume of My Recipe",
  //     healthScore: 100,
  //     steps: "Here we got a series of steps to make My Recipe",
  //     diets: [
  //       "gluten free",
  //       "lacto ovo vegetarian",
  //       "paleolithic",
  //       "whole 30",
  //       "vegan",
  //     ],
  //   },
  //   {
  //     id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
  //     name: "My Recipe soup",
  //     image:
  //       "https://media.istockphoto.com/id/1349383878/es/foto/pizza-hawaiana-con-jam%C3%B3n-y-pi%C3%B1a.jpg?s=1024x1024&w=is&k=20&c=6QMaT_zY84XmSR0P6_lteE5eguFs1Y9ibaPY4T4ApSk=",
  //     summary: "This is the resume of My Recipe",
  //     healthScore: 100,
  //     steps: "Here we got a series of steps to make My Recipe",
  //     diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
  //   },
  //   {
  //     id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
  //     name: "My Recipe soup",
  //     image: "https//:imageDirection",
  //     summary: "This is the resume of My Recipe",
  //     healthScore: 100,
  //     steps: "Here we got a series of steps to make My Recipe",
  //     diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
  //   },
  //   {
  //     id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
  //     name: "My Recipe soup",
  //     image: "https//:imageDirection",
  //     summary: "This is the resume of My Recipe",
  //     healthScore: 100,
  //     steps: "Here we got a series of steps to make My Recipe",
  //     diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
  //   },
  //   {
  //     id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
  //     name: "My Recipe soup",
  //     image: "https//:imageDirection",
  //     summary: "This is the resume of My Recipe",
  //     healthScore: 100,
  //     steps: "Here we got a series of steps to make My Recipe",
  //     diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
  //   },
  //   {
  //     id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
  //     name: "My Recipe soup",
  //     image: "https//:imageDirection",
  //     summary: "This is the resume of My Recipe",
  //     healthScore: 100,
  //     steps: "Here we got a series of steps to make My Recipe",
  //     diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
  //   },
  //   {
  //     id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
  //     name: "My Recipe soup",
  //     image: "https//:imageDirection",
  //     summary: "This is the resume of My Recipe",
  //     healthScore: 100,
  //     steps: "Here we got a series of steps to make My Recipe",
  //     diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
  //   },
  //   {
  //     id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
  //     name: "My Recipe soup",
  //     image: "https//:imageDirection",
  //     summary: "This is the resume of My Recipe",
  //     healthScore: 100,
  //     steps: "Here we got a series of steps to make My Recipe",
  //     diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
  //   },
  //   {
  //     id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
  //     name: "My Recipe soup",
  //     image: "https//:imageDirection",
  //     summary: "This is the resume of My Recipe",
  //     healthScore: 100,
  //     steps: "Here we got a series of steps to make My Recipe",
  //     diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
  //   },
  //   {
  //     id: "c9b45d66-90e4-4054-9219-c3638c670520",
  //     name: "My Recipe soup",
  //     image: "https//:imageDirection",
  //     summary: "This is the resume of My Recipe",
  //     healthScore: 100,
  //     steps: "Here we got a series of steps to make My Recipe",
  //     diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
  //   },
  //   {
  //     id: "b01086c0-2eae-42b9-bf98-efc96596f208",
  //     name: "My Recipe soup",
  //     image: "https//:imageDirection",
  //     summary: "This is the resume of My Recipe",
  //     healthScore: 100,
  //     steps: "Here we got a series of steps to make My Recipe",
  //     diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
  //   },
  //   {
  //     id: "ec45c4e8-0c78-499b-8377-e00732df263f",
  //     name: "My Recipe soup",
  //     image: "https//:imageDirection",
  //     summary: "This is the resume of My Recipe",
  //     healthScore: 100,
  //     steps: "Here we got a series of steps to make My Recipe",
  //     diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
  //   },
  // ];

  const recipes = useSelector((state) => state.recipes);

  return (
    <div className="mainCard">
      {recipes.map((rec) => {
        return (
          <RecipeCard image={rec.image} name={rec.name} diets={rec.diets} />
        );
      })}
    </div>
  );
};

export default RecipeCardContainer;
