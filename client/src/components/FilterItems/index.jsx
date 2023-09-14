//Funcionalidad
import { useSelector } from "react-redux";

// Estilos
import "./module.css";

export default () => {
  const diets = useSelector((state) => state.diets);

  return (
    <div className="filters">
      <label htmlFor="dietFilter">Diets:</label>
      <select id="dietFilter">
        <option value="all">ALL</option>
        {diets?.map((diet) => {
          return (
            <option key={diet.name} value={diet.name}>
              {diet.name.toUpperCase()}
            </option>
          );
        })}
      </select>

      <label htmlFor="healthScoreFilter">Health Score:</label>
      <select id="healthScoreFilter">
        <option value="asc">Ascendent</option>
        <option value="desc">Descendent</option>
      </select>

      <label htmlFor="nameFilter">Name:</label>
      <select id="nameFilter">
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <label htmlFor="originFilter">Origin:</label>
      <select id="originFilter">
        <option value="all">ALL</option>
        <option value="api">API</option>
        <option value="db">DB</option>
      </select>
    </div>
  );
};
