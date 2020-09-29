import React from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Link href="/">
                    <a>
                        <img className={styles.logoPersonal} src="images/logo.png" alt="Logo Personal - Jesús Casañas Developer" />
                    </a>
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}><Link href=""><a>Inicio</a></Link></li>
                    <li className={styles.item}><Link href=""><a>Blog</a></Link></li>
                    <li className={styles.item}><Link href=""><a>Servicios</a></Link></li>
                    <li className={styles.item}><Link href=""><a>Portafolio</a></Link></li>
                    <li className={styles.item}><Link href=""><a>Sobre mi</a></Link></li>
                    <li className={styles.item}><Link href=""><a>Contacto</a></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

