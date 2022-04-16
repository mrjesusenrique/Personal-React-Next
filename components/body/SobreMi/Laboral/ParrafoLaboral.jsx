import styles from "../../../../styles/Sobremi.module.css";
import Fade from "react-reveal/Fade";
import Profesional from "../../../../utilities/profesional";
import { useTranslation } from "react-i18next";

const ParrafoLaboral = () => {
  const { t } = useTranslation();

  return (
    <article className={styles.contenedorParrafoLaboral}>
      <Fade>
        <h1 className={styles.titleSectionLaboral}>
          {t("header.navBar.labor")}
        </h1>
      </Fade>
      <Fade>
        <Profesional />
      </Fade>
    </article>
  );
};

export default ParrafoLaboral;
