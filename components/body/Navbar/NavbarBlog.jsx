import stylesOther from '../../../styles/HeaderOther.module.css';
import Link from 'next/link';

const NavbarBlog = () => {
    return (
        <>
            <li className={stylesOther.item}>
                <Link href="/">
                    <a>Inicio</a>
                </Link>
            </li>

            <li className={stylesOther.item}>
                <Link href="/portafolio">
                    <a>Académico</a>
                </Link>
            </li>

            <li className={stylesOther.item}>
                <Link href="sobre-mi">
                    <a>Carrera Profesional</a>
                </Link>
            </li>

            <li className={stylesOther.item}>
                <Link href="/contacto">
                    <a>Contacto</a>
                </Link>
            </li>
        </>
    );
};

export default NavbarBlog;