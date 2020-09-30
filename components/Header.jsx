import React from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logoPersonal}>
                <Link href="/">
                    <a>
                        <h1>JC Developer</h1>
                    </a>
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>

                    <li className={styles.item}>
                        <Link href="/">
                            <a>Inicio</a>
                        </Link>
                    </li>

                    <li className={styles.item}>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                    </li>

                    <li className={styles.item}>
                        <Link href="/servicios">
                            <a>Servicios</a>
                        </Link>
                    </li>

                    <li className={styles.item}>
                        <Link href="/portafolio">
                            <a>Portafolio</a>
                        </Link>
                    </li>

                    <li className={styles.item}>
                        <Link href="sobre-mi">
                            <a>Sobre mi</a>
                        </Link>
                    </li>

                    <li className={styles.item}>
                        <Link href="/contacto">
                            <a>Contacto</a>
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;

