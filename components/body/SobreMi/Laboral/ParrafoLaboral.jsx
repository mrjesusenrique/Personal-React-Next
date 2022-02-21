import styles from "../../../../styles/Sobremi.module.css";
import Fade from "react-reveal/Fade";
import Profesional from "../../../../utilities/profesional";

const ParrafoLaboral = () => {
  return (
    <article className={styles.contenedorParrafoLaboral}>
      <Fade>
        <h1 className={styles.titleSectionLaboral}>Profesional</h1>
      </Fade>
      <Fade>
        <Profesional />
      </Fade>
    </article>
  );
};

export default ParrafoLaboral;
