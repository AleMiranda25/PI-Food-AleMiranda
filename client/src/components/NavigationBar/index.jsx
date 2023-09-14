// Funcionalidad

// Estilos
import "./module.css";
// Componentes
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/create">Create</Link>
      <Link to="/about">About</Link>
      <div className="searchBar">
        <SearchBar />
      </div>
      <div className="landingButton">
        <Link to="/"> ↩️ Landing</Link>
      </div>
    </div>
  );
};

export default NavigationBar;
