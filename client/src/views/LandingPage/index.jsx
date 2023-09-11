// Funcionalidad
import { useNavigate } from "react-router";
// Estilos
import "./module.css";
// Componentes
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="card">
        <h2>HENRY's FOOD APP</h2>
        <h4>Created by Ale Miranda</h4>
        <p>Tecnologies</p>
        <div className="tecnologies">
          <img src="../../assets/Imagenes/html.png" alt="html logo" />
          <img src="../../assets/Imagenes/css.png" alt="css logo" />
          <img src="../../assets/Imagenes/javascript.png" alt="js logo" />
          <img src="../../assets/Imagenes/react.png" alt="react logo" />
          <img src="../../assets/Imagenes/redux.png" alt="redux logo" />
          <img src="../../assets/Imagenes/express.png" alt="express logo" />
          <img src="../../assets/Imagenes/posgresql.png" alt="posgresql logo" />
          <img src="../../assets/Imagenes/sequelize.png" alt="sequelize logo" />
        </div>
      </div>
      <a href="#" className="ov" onClick={() => navigate("/home")}>
        GO HOME
      </a>
    </div>
  );
};

export default LandingPage;
