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
// Estilos
import "./module.css";
// Componentes

const About = () => {
  return (
    <div className="container">
      <h1>Proyecto Individual - Tema Foods</h1>
      <h1> Henry Bootcamp </h1>
      <h2>Desarrollador: Jorge Alejandro Miranda</h2>
      <h2>Tecnologias Implementadas</h2>
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
  );
};
export default About;
