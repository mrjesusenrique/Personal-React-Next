import React from "react";
import Link from "next/link";
import styles from "../../../../styles/Navbar.module.css";

const NavbarResponsive = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <Link href="/">
          <li className={styles.item}>Inicio</li>
        </Link>
        <Link href="/portafolio">
          <li className={styles.item}>Académico</li>
        </Link>
        <Link href="/sobre-mi">
          <li className={styles.item}>Experiencia Profesional</li>
        </Link>
        <Link href="/contacto">
          <li className={styles.item}>Contacto</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavbarResponsive;
