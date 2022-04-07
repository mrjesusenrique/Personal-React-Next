import styles from "../styles/Sobremi.module.css";
import Link from "next/link";

const Academico = () => {
  return (
    <p className={styles.parrafo}>
      En diciembre de 2014 inicié en Venezuela la carrera Tecnología Electrónica
      en la{" "}
      <Link href="http://www.usb.ve/">
        <a className={styles.link} target="_blanck">
          Universidad Simón Bolívar - Sede Litoral
        </a>
      </Link>{" "}
      donde cursé hasta aprobar el cuarto trimestre en marzo de 2018, pero dados
      los problemas de mi país me vi en la obligación de postergar mi avance
      acádemico y buscar suerte fuera de mis fronteras. Ya en noviembre del año
      2019 decidí comenzar en el mundo del Desarrollo y Programación Web
      incursionando primero en HTML y CSS de la mano de{" "}
      <Link href="https://www.educacionit.com/">
        <a className={styles.link} target="_blanck">
          EducaciónIT
        </a>
      </Link>{" "}
      donde estuve cursando la carrera Desarrollo Web Full Stack hasta julio de
      2021. Actualmente me encuentro cursando el primer cuatrimestre de la
      carrera Tecnicatura Superior en Análisis de Sistemas en{" "}
      <Link href="https://www.istea.edu.ar/">
        <a className={styles.link} target="_blanck">
          ISTEA
        </a>
      </Link>
      .
    </p>
  );
};

export default Academico;
