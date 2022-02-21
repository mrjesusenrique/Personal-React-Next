import styles from "../../../styles/index.module.css";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const Presentacion = () => {
  return (
    <Fade>
      <div className={styles.welcome}>
        <h1>
          Hola! Soy <strong>Jesús Casañas</strong>
        </h1>
        <h1 className={styles.title}>Desarrollador Web Full Stack.</h1>

        <div className={styles.intro}>
          <p>
            Formado en{" "}
            <Link href="https://www.educacionit.com/">
              <a target="_blanck" className={styles.carreraE}>
                EducaciónIT
              </a>
            </Link>
            .
          </p>
          <p>
            Estudiante de Tecnicatura Superior en Análisis de Sistemas en{" "}
            <Link href="https://www.istea.edu.ar/">
              <a target="_blanck" className={styles.carreraU}>
                ISTEA
              </a>
            </Link>
            .
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default Presentacion;
