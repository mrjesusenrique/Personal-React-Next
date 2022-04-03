import { useState, useEffect } from "react";
import styles from "../../../styles/Footer.module.css";

const Footer = () => {
  const [actualYear, setActualYear] = useState(null);

  useEffect(() => {
    setActualYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      &copy; Copyright {actualYear}. Desarrollado por
      {<strong> Jesús Casañas</strong>}.
    </footer>
  );
};

export default Footer;
