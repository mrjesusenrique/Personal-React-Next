import styles from "../../../../styles/Sobremi.module.css";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const ParrafoLaboral = () => {
  return (
    <article className={styles.contenedorParrafoLaboral}>
      <Fade>
        <h1 className={styles.titleSectionLaboral}>Profesional</h1>
      </Fade>
      <Fade>
        <p className={styles.parrafoLaboral}>
          Mi experiencia como profesional en el área ha transcurrido en dos
          importantes empresas, desempeñandome en proyectos innovadores y de
          envergadura. La primera,{" "}
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
          desarrollando servicios para el área financiera junto a un equipo de trabajo
          multidisciplinario ubicado en distintas partes de Latinoamérica
        </p>
      </Fade>
    </article>
  );
};

export default ParrafoLaboral;
