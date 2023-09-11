// Funcionalidad
import colorSelector from "../Functions/colorSelector";
// import { NavLink } from "react-router-dom";
// Estilos
import "./module.css";

const PkmnCard = ({ id, name, image, types }) => {
  return (
    <div className="cardContainer">
      <div className="nameContainer">
        <h2>{name.toUpperCase()}</h2>
      </div>
      <img src={image} alt="Recipe Image" />
      <div className="typesWrapper">
        {types?.map((type, index) => {
          const style = {
            backgroundColor: colorSelector(type),
            margin: "5px",
            padding: "5px",
            borderRadius: "15px",
          };
          return (
            <h2 key={index} style={style}>
              {type.toUpperCase()}
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default PkmnCard;
