import stylesIndex from '../../../styles/HeaderIndex.module.css';
import { Link as LinkScroll } from 'react-scroll';

const NavbarHome = () => {
    return (
        <>
            <li className={stylesIndex.item}>
                <a href="">
                    <LinkScroll to="top" smooth={true} duration={2000}>Inicio</LinkScroll>
                </a>
            </li>

            <li className={stylesIndex.item}>
                <a href="">
                    <LinkScroll to="sobreMiAcademico" smooth={true} duration={2000}>Académico</LinkScroll>
                </a>
            </li>

            <li className={stylesIndex.item}>
                <a href="">
                    <LinkScroll>Carrera Profesional</LinkScroll>
                </a>
            </li>

            <li className={stylesIndex.item}>
                <a href="">
                    <LinkScroll to="contacto" smooth={true} duration={2000}>Contacto</LinkScroll>
                </a>
            </li>
        </>
    );
};

export default NavbarHome;