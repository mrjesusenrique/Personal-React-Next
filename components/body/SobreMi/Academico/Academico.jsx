import styles from "../../../../styles/Sobremi.module.css";
import ParrafoAcadermico from "./ParrafoAcadermico";
import ImgAcademico from "./ImgAcademico";

const Academico = () => {
  return (
    <section className={styles.section} id="sobreMiAcademico">
      <ImgAcademico />
      <ParrafoAcadermico />
    </section>
  );
};

export default Academico;
