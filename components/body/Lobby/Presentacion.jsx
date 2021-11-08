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
        <h1>Desarrollador Web Full Stack.</h1>

        <div className={styles.intro}>
          <p>
            Estudiante de Desarrollo Web Full Stack en{" "}
            <Link href="https://www.educacionit.com/">
              <a target="_blanck" className={styles.carreraE}>
                EducaciónIT
              </a>
            </Link>
            .
          </p>
          <p>
            Alumno autodidacta de la Plataforma{" "}
            <Link href="https://www.udemy.com/">
              <a target="_blanck" className={styles.carreraU}>
                Udemy
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
