import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.sidebar}>
            <input type="checkbox" id="btn-movil" />
            <label htmlFor="btn-movil" id="label-movil"><span className={styles.img}></span></label>

            <nav className={styles.nav}>
                <ul>
                    <Link href="/"><li className={styles.item}>Inicio</li></Link>
                    <Link href="/portafolio"><li className={styles.item}>Portafolio</li></Link>
                    <Link href="/sobre-mi"><li className={styles.item}>Sobre mi</li></Link>
                    <Link href="/contacto"><li className={styles.item}>Contacto</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;