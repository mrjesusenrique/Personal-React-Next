import styles from "../../../../styles/Sobremi.module.css";
import ParrafoAcadermico from "./ParrafoAcadermico";
import ImgAcademico from "./ImgAcademico";
import Fade from "react-reveal/Fade";

const Academico = () => {
  return (
    <Fade>
      <section className={styles.section} id="sobreMiAcademico">
        <ImgAcademico />
        <ParrafoAcadermico />
      </section>
    </Fade>
  );
};

export default Academico;
