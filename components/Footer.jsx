import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; Copyright 2020. Desarrollado por <strong className={styles.light}>Jesús Casañas</strong>. Todos los Derechos Reservados.</p>
        </footer>
    );
};

export default Footer;