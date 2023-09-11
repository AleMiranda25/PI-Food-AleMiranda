// Funcionalidad

// Estilos
import "./module.css";
// Componentes
// import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <ul>
        <li>
          <a className="active" href="#home">
            <Link to="/home">Home</Link>
          </a>
        </li>
        <li>
          <a href="#create">
            <Link to="/create">Create</Link>
          </a>
        </li>
        <li>
          <a href="#about">About </a>
        </li>
        <li className="searchBar"></li>
        <li>
          <li className="dropdown">
            <a className="dropbtn">TYPE 1</a>
            <li className="dropdownTypes"></li>
          </li>
          <li class="dropdown">
            <a class="dropbtn">TYPE 2</a>
            <li class="dropdownTypes"></li>
          </li>
        </li>

        <li class="dropdown">
          <a class="dropbtn">STATS</a>
          <li class="dropdown-content">
            <a href="#">A-Z</a>
            <a href="#">ATK</a>
            <a href="#">DEF</a>
            <a href="#">HP</a>
            <a href="#">SPD</a>
          </li>
        </li>
        <li class="dropdown">
          <a class="dropbtn">ORDER</a>
          <li class="dropdown-content">
            <a href="#">ASCENDANT</a>
            <a href="#">DESCENDANT</a>
          </li>
        </li>
        <li class="dropdown">
          <a class="dropbtn">ORIGIN</a>
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
