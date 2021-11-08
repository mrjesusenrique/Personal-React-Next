import styles from "../../../../styles/Sobremi.module.css";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const ParrafoAcademico = () => {
  return (
    <article className={styles.contenedorParrafo}>
      <Fade>
        <h1 className={styles.titleSectionAcademico}>Académico</h1>
      </Fade>
      <Fade>
        <p className={styles.parrafo}>
          ¡Hola! Mi nombre es{" "}
          <strong className={styles.noStrong}>Jesús Casañas</strong>, soy
          estudiante de{" "}
          <strong className={styles.noStrong}>
            Desarrollo y Programación Web
          </strong>{" "}
          en{" "}
          <strong>
            <Link href="https://www.educacionit.com/">
              <a className={styles.link} target="_blanck">
                EducaciónIT
              </a>
            </Link>{" "}
          </strong>
          Buenos Aires, tengo 24 años y me desempeño como Desarrollador React en{" "}
          <strong>
            <Link href="https://www.close-upinternational.com/">
              <a target="_blanck" className={styles.job}>Close-Up International</a>
            </Link>
          </strong>
          . Hace aproximadamente cuatro años partí de Caracas, Venezuela rumbo a
          la Capital Argentina en búsqueda de una oportunidad de desarrollo y
          superación tanto personal como familiar. Desde que arribé enfoqué mis
          estudios profesionales en el área de
          <strong className={styles.noStrong}>
            {" "}
            Desarrollo y Programación Web
          </strong>
          , hoy por hoy puedo traer este sitio que representa mi trabajo y
          habilidades en el campo.
        </p>
      </Fade>
    </article>
  );
};

export default ParrafoAcademico;
