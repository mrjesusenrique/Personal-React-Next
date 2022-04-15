import styles from "../../../styles/index.module.css";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

const Presentacion = () => {
  const { t } = useTranslation();

  return (
    <Fade>
      <div className={styles.welcome}>
        <h1
          className={styles.name}
          dangerouslySetInnerHTML={{
            __html: t("presentationLobby.presentationName"),
          }}
        />

        <h1 className={styles.title}>
          {t("presentationLobby.presentationDev")}
        </h1>

        <div className={styles.intro}>
          <p>
            {t("presentationLobby.trainedIn")}{" "}
            <Link href="https://www.educacionit.com/">
              <a target="_blanck" className={styles.carreraE}>
                EducaciónIT
              </a>
            </Link>
            .
          </p>
          <p>
            {t("presentationLobby.currentStudies")}{" "}
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
