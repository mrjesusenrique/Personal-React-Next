import styles from "../styles/Sobremi.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Academico = () => {
  const { t } = useTranslation();

  return (
    <p className={styles.parrafo}>
      {t("academic.paragraph1")}{" "}
      <Link href="http://www.usb.ve/">
        <a className={styles.link} target="_blanck">
          {t("academic.university1")}
        </a>
      </Link>{" "}
      {t("academic.paragraph2")}{" "}
      <Link href="https://www.educacionit.com/">
        <a className={styles.link} target="_blanck">
          {t("academic.university2")}
        </a>
      </Link>{" "}
      {t("academic.paragraph3")}{" "}
      <Link href="https://www.istea.edu.ar/">
        <a className={styles.link} target="_blanck">
          {t("academic.university3")}
        </a>
      </Link>
      .
    </p>
  );
};

export default Academico;
