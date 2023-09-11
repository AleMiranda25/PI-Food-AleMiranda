//Funcionalidad

// Estilos
import "./module.css";
//Componentes
import RecipeCard from "../RecipeCard";

const RecipeCardContainer = () => {
  const test = [
    {
      id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
      name: "My Recipe soup",
      image: "https//:imageDirection",
      summary: "This is the resume of My Recipe",
      healthScore: 100,
      steps: "Here we got a series of steps to make My Recipe",
      diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
    },
    {
      id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
      name: "My Recipe soup",
      image: "https//:imageDirection",
      summary: "This is the resume of My Recipe",
      healthScore: 100,
      steps: "Here we got a series of steps to make My Recipe",
      diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
    },
    {
      id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
      name: "My Recipe soup",
      image: "https//:imageDirection",
      summary: "This is the resume of My Recipe",
      healthScore: 100,
      steps: "Here we got a series of steps to make My Recipe",
      diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
    },
    {
      id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
      name: "My Recipe soup",
      image: "https//:imageDirection",
      summary: "This is the resume of My Recipe",
      healthScore: 100,
      steps: "Here we got a series of steps to make My Recipe",
      diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
    },
    {
      id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
      name: "My Recipe soup",
      image: "https//:imageDirection",
      summary: "This is the resume of My Recipe",
      healthScore: 100,
      steps: "Here we got a series of steps to make My Recipe",
      diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
    },
    {
      id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
      name: "My Recipe soup",
      image: "https//:imageDirection",
      summary: "This is the resume of My Recipe",
      healthScore: 100,
      steps: "Here we got a series of steps to make My Recipe",
      diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
    },
    {
      id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
      name: "My Recipe soup",
      image: "https//:imageDirection",
      summary: "This is the resume of My Recipe",
      healthScore: 100,
      steps: "Here we got a series of steps to make My Recipe",
      diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
    },
    {
      id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
      name: "My Recipe soup",
      image: "https//:imageDirection",
      summary: "This is the resume of My Recipe",
      healthScore: 100,
      steps: "Here we got a series of steps to make My Recipe",
      diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
    },
    {
      id: "1b5ae1e6-299b-48bb-9831-159a57d40efe",
      name: "My Recipe soup",
      image: "https//:imageDirection",
      summary: "This is the resume of My Recipe",
      healthScore: 100,
      steps: "Here we got a series of steps to make My Recipe",
      diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
    },
    {
      id: "c9b45d66-90e4-4054-9219-c3638c670520",
      name: "My Recipe soup",
      image: "https//:imageDirection",
      summary: "This is the resume of My Recipe",
      healthScore: 100,
      steps: "Here we got a series of steps to make My Recipe",
      diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
    },
    {
      id: "b01086c0-2eae-42b9-bf98-efc96596f208",
      name: "My Recipe soup",
      image: "https//:imageDirection",
      summary: "This is the resume of My Recipe",
      healthScore: 100,
      steps: "Here we got a series of steps to make My Recipe",
      diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
    },
    {
      id: "ec45c4e8-0c78-499b-8377-e00732df263f",
      name: "My Recipe soup",
      image: "https//:imageDirection",
      summary: "This is the resume of My Recipe",
      healthScore: 100,
      steps: "Here we got a series of steps to make My Recipe",
      diets: ["gluten free", "lacto ovo vegetarian", "paleolithic", "whole 30"],
    },
  ];

  return (
    <div className="mainCard">
      {test.map((rec) => {
        return (
          <RecipeCard image={rec.image} name={rec.name} diets={rec.diets} />
        );
      })}
    </div>
  );
};

export default RecipeCardContainer;
