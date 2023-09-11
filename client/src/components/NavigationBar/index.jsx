// Funcionalidad
import { BsDatabaseAdd, BsFillBookFill, BsCaretDownFill } from "react-icons/bs";
import { TbPokeball } from "react-icons/tb";
// Estilos
import "./module.css";
// Componentes
import SearchBar from "../SearchBar";
import TypeListConstructor from "./typeListConstructor";

const NavigationBar = () => {
  return (
    <div>
      <ul>
        <li>
          <a className="active" href="#home">
            <TbPokeball /> Home{" "}
          </a>
        </li>
        <li>
          <a href="#create">
            <BsDatabaseAdd /> Create{" "}
          </a>
        </li>
        <li>
          <a href="#about">
            <BsFillBookFill /> About{" "}
          </a>
        </li>
        <li className="searchBar">
          <SearchBar />
        </li>
        <li>
          <li className="dropdown">
            <a className="dropbtn">
              TYPE 1 <BsCaretDownFill />
            </a>
            <li className="dropdownTypes">
              <TypeListConstructor />
            </li>
          </li>
          <li class="dropdown">
            <a class="dropbtn">
              TYPE 2 <BsCaretDownFill />
            </a>
            <li class="dropdownTypes">
              <TypeListConstructor />
            </li>
          </li>
        </li>

        <li class="dropdown">
          <a class="dropbtn">
            STATS <BsCaretDownFill />
          </a>
          <li class="dropdown-content">
            <a href="#">A-Z</a>
            <a href="#">ATK</a>
            <a href="#">DEF</a>
            <a href="#">HP</a>
            <a href="#">SPD</a>
          </li>
        </li>
        <li class="dropdown">
          <a class="dropbtn">
            ORDER <BsCaretDownFill />
          </a>
          <li class="dropdown-content">
            <a href="#">ASCENDANT</a>
            <a href="#">DESCENDANT</a>
          </li>
        </li>
        <li class="dropdown">
          <a class="dropbtn">
            ORIGIN <BsCaretDownFill />
          </a>
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
