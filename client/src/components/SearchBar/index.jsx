// Funcionalidad
// import { BsSearch } from "react-icons/bs";
// Estilos
import "./module.css";

export default function SearchBar(props) {
  const { onSearch } = props;
  return (
    <div className="searchBar">
      <button onClick={onSearch}>🔍︎</button>
      <input type="search" placeholder="  Search Name or ID" />
    </div>
  );
}
