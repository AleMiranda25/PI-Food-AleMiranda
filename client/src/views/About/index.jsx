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
  LinkedIn,
} from "../../assets/Imagenes/index.js";
// Estilos
import "./module.css";
// Componentes

const About = () => {
  return (
    <div className="infoContain">
      <h1>Henry Bootcamp - Proyecto Individual</h1>
      <div className="otherInfo">
        <h1> Tema Foods </h1>
        <h2>Desarrollador: Jorge Alejandro Miranda</h2>
        <h2>Tecnologias Implementadas</h2>
        <div className="tecnologies">
          <img src={ImageHTML} alt="html logo" />
          <img src={ImageCSS} alt="css logo" />
          <img src={ImageExpress} alt="js logo" />
          <img src={ImageJS} alt="react logo" />
          <img src={ImageReact} alt="react logo" />
          <img src={ImageExpress} alt="express logo" />
          <img src={ImagePostgre} alt="posgresql logo" />
          <img src={ImageSeq} alt="sequelize logo" />
          <img src={ImageRedux} alt="redux logo" />
        </div>
      </div>

      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/ale-miranda-15423a263/"
          target="_blank"
        >
          <img src={LinkedIn} alt="linkedin logo" />
        </a>
      </div>
    </div>
  );
};
export default About;
