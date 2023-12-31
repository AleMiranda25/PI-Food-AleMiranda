// Funcionalidad
import {
  ImageHTML,
  ImageCSS,
  ImageExpress,
  ImageJS,
  ImagePostgre,
  ImageReact,
  ImageRedux,
  ImageSeq,
} from "../../assets/Imagenes/index.js";
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
          <img src={ImageHTML} alt="html logo" />
          <img src={ImageCSS} alt="css logo" />
          <img src={ImageExpress} alt="js logo" />
          <img src={ImageJS} alt="react logo" />
          <img src={ImageRedux} alt="redux logo" />
          <img src={ImageExpress} alt="express logo" />
          <img src={ImagePostgre} alt="posgresql logo" />
          <img src={ImageReact} alt="react logo" />
          <img src={ImageSeq} alt="sequelize logo" />
        </div>
      </div>
      <a href="#" className="ov" onClick={() => navigate("/home")}>
        GO HOME
      </a>
    </div>
  );
};

export default LandingPage;
