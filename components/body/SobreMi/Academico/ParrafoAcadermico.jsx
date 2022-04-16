import styles from "../../../../styles/Sobremi.module.css";
import Fade from "react-reveal/Fade";
import Academico from "../../../../utilities/academico";
import { useTranslation } from "react-i18next";

const ParrafoAcademico = () => {
  const { t } = useTranslation();

  return (
    <article className={styles.contenedorParrafo}>
      <Fade>
        <h1 className={styles.titleSectionAcademico}>
          {t("header.navBar.academic")}
        </h1>
      </Fade>
      <Fade>
        <Academico />
      </Fade>
    </article>
  );
};

export default ParrafoAcademico;
