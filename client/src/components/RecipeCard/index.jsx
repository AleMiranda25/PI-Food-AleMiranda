// Funcionalidad

// import { NavLink } from "react-router-dom";
// Estilos
import "./module.css";

const RecipeCard = ({ name, image, diets }) => {
  return (
    <div className="cardContainer">
      <div className="nameContainer">
        <h2>{name.toUpperCase()}</h2>
      </div>
      <img src={image} alt="Recipe Image" />
      <div className="dietsWrapper">
        {diets?.map((diet, index) => {
          const style = {
            margin: "5px",
            padding: "5px",
            borderRadius: "15px",
          };
          return (
            <h2 key={index} style={style}>
              {diet.toUpperCase()}
            </h2>
          );
        })}
      </div>
    </div>
    // <div>UNA CARD</div>
  );
};

export default RecipeCard;
