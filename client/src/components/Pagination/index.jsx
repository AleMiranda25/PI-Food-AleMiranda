// Funcionalidad

// Estilos
import "./module.css";
// Componentes

const Pagination = ({ pages, setPages, maxForPages }) => {
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      if (
        event.target.value >= 1 &&
        event.target.value <= maxForPages &&
        !isNaN(Number(event.target.value))
      ) {
        setPages(Number(event.target.value));
      }
    }
  };
  return (
    <div className={style.container}>
      <a onClick={() => pages > 1 && setPagina(pages - 1)}>
        <img src={left} alt="" />
      </a>
      <input onKeyDown={onKeyDown} type="text" value={pagina} />
      <h2>de {maximo}</h2>
      <a onClick={() => pagina < maximo && setPagina(pagina + 1)}>
        <img src={right} alt="" />
      </a>
    </div>
  );
};

export default Pagination;
