// Funcionalidad

// Estilos
import "./module.css";
// Componentes
import SearchBar from "../SearchBar";
import { Link, Route, Routes } from "react-router-dom";
import NavItems from "../NavItems";

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
        <Routes>
          <Route exact path="/home" Component={NavItems} />
        </Routes>

        <li className="landingButton">
          <Link to="/">Landing</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
