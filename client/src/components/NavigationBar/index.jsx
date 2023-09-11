// Funcionalidad

// Estilos
import "./module.css";
// Componentes
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="searchBar"></li>
        <li>
          <li className="dropdown">
            <a className="dropbtn">Diets</a>
            <li className="dropdownTypes"></li>
          </li>
        </li>

        <li class="dropdown">
          <a class="dropbtn">Filter</a>
          <li class="dropdown-content">
            <a href="#">A-Z</a>
            <a href="#">Health Score</a>
          </li>
        </li>
        <li class="dropdown">
          <a class="dropbtn">Order</a>
          <li class="dropdown-content">
            <a href="#">Ascendant</a>
            <a href="#">Descendant</a>
          </li>
        </li>
        <li class="dropdown">
          <a class="dropbtn">Origin</a>
          <li class="dropdown-content">
            <a href="#">ALL</a>
            <a href="#">API</a>
            <a href="#">DB</a>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
