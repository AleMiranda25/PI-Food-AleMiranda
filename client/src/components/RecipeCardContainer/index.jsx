//Funcionalidad
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { allPokemons } from "../../redux/actions";
// Estilos
import "./module.css";
//Componentes
import PkmnCard from "../PkmnCard";

const PkmnCardContainer = ({ pokemons }) => {
  return (
    <div className="mainCard">
      {pokemons.map((poke) => {
        <PkmnCard
          id={poke.id}
          name={poke.name}
          image={poke.image}
          types={poke.types}
        />;
      })}
    </div>
  );
};

export default PkmnCardContainer;
