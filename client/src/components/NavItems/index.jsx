//Funcionalidad
import { useSelector } from "react-redux";

export default () => {
  const diets = useSelector((state) => state.diets);

  return (
    <div>
      <li>
        <li className="dropdown">
          <a className="dropbtn">Diets</a>
          <li className="dropdown-content"></li>
          {diets?.map((diet) => {
            console.log(diet.name);
            return (
              <a key={diet.id} style={style}>
                {diet.name}
              </a>
            );
          })}
        </li>
      </li>
      <li className="dropdown">
        <a className="dropbtn">Filter</a>
        <li className="dropdown-content">
          <a href="#">A-Z</a>
          <a href="#">Health Score</a>
        </li>
      </li>
      <li className="dropdown">
        <a className="dropbtn">Order</a>
        <li className="dropdown-content">
          <a href="#">Ascendant</a>
          <a href="#">Descendant</a>
        </li>
      </li>
      <li className="dropdown">
        <a className="dropbtn">Origin</a>
        <li className="dropdown-content">
          <a href="#">ALL</a>
          <a href="#">API</a>
          <a href="#">DB</a>
        </li>
      </li>
    </div>
  );
};
