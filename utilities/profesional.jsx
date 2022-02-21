import styles from "../styles/Sobremi.module.css";
import Link from "next/link";

const Profesional = () => {
  return (
    <p className={styles.parrafoLaboral}>
      Mi experiencia como profesional en el área ha transcurrido en dos
      importantes empresas, desempeñandome en proyectos innovadores y de
      trascendencia. La primera,{" "}
      <Link href="https://www.itrio.net/">
        <a className={styles.link} target="_blanck">
          Itrio S.A.
        </a>
      </Link>{" "}
      en sociedad con{" "}
      <Link href="https://www.veritran.com/">
        <a className={styles.link} target="_blanck">
          Veritran
        </a>
      </Link>{" "}
      desarrollando servicios e interfaces de usuario para el área financiera
      del mercado mexicano, junto a un equipo de trabajo multidisciplinario
      ubicado en distintas partes de Latinoamérica, en el lapso de tiempo
      comprendido desde noviembre 2020 hasta octubre 2021. Desde octubre del año
      pasado formo parte del equipo de desarrollo de{" "}
      <Link href="https://www.close-upinternational.com/">
        <a target="_blanck" className={styles.link}>
          Close-Up International
        </a>
      </Link>
      , desempeñandome como desarrollador React en un proyecto del área
      farmacéutica que mezcla lo mejor de BI <b>(Business Intelligence)</b> con
      el poder que brinda una interfaz de usuario atractiva, intuitiva y
      adaptable a los distintos dispositivos.
    </p>
  );
};

export default Profesional;
