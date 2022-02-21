import styles from "../../../../styles/Sobremi.module.css";
import Fade from "react-reveal/Fade";
import Academico from "../../../../utilities/academico";

const ParrafoAcademico = () => {
  return (
    <article className={styles.contenedorParrafo}>
      <Fade>
        <h1 className={styles.titleSectionAcademico}>Académico</h1>
      </Fade>
      <Fade>
        <Academico />
      </Fade>
    </article>
  );
};

export default ParrafoAcademico;
