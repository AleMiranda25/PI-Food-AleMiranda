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
        <li className="searchBar">
          <SearchBar />
        </li>
        <li>
          <li className="dropdown">
            <a className="dropbtn">Diets</a>
            <li className="dropdownTypes"></li>
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
        <li>
          <Link to="/">Landing</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
