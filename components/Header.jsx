import React from 'react';
import stylesIndex from '../styles/HeaderIndex.module.css';
import stylesOther from '../styles/HeaderOther.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

const Header = () => {

    const router = useRouter();

    return (
        <header className={stylesIndex.header}>
            <div className={stylesIndex.logoPersonal}>

                {router.pathname === "/" ? (

                    <Link href="/">
                        <a className={stylesIndex.colorLogo}>
                            <h1>JC Developer</h1>
                        </a>
                    </Link>

                ) : (

                        <Link href="/">
                            <a className={stylesOther.colorLogo}>
                                <h1>JC Developer</h1>
                            </a>
                        </Link>
                    )}

            </div>
            <nav className={stylesIndex.nav}>

                {router.pathname === '/' ? (

                    <ul className={stylesIndex.list}>

                        <li className={stylesIndex.item}>
                            <Link href="/">
                                <a>Inicio</a>
                            </Link>
                        </li>

                        <li className={stylesIndex.item}>
                            <Link href="/portafolio">
                                <a>Portafolio</a>
                            </Link>
                        </li>

                        <li className={stylesIndex.item}>
                            <Link href="sobre-mi">
                                <a>Sobre mi</a>
                            </Link>
                        </li>

                        <li className={stylesIndex.item}>
                            <Link href="/contacto">
                                <a>Contacto</a>
                            </Link>
                        </li>

                    </ul>
                ) : (

                        <ul className={stylesIndex.list}>

                            <li className={stylesOther.item}>
                                <Link href="/">
                                    <a>Inicio</a>
                                </Link>
                            </li>

                            <li className={stylesOther.item}>
                                <Link href="/portafolio">
                                    <a>Portafolio</a>
                                </Link>
                            </li>

                            <li className={stylesOther.item}>
                                <Link href="sobre-mi">
                                    <a>Sobre mi</a>
                                </Link>
                            </li>

                            <li className={stylesOther.item}>
                                <Link href="/contacto">
                                    <a>Contacto</a>
                                </Link>
                            </li>

                        </ul>
                    )
                }
            </nav>

            <Navbar />
        </header>
    );
};

export default Header;

