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
                    <LinkScroll to="sobreMiAcademico" smooth={true} duration={2200}>Académico</LinkScroll>
                </a>
            </li>

            <li className={stylesIndex.item}>
                <a href="">
                    <LinkScroll to="sobreMiLaboral" smooth={true} duration={3000}>Carrera Profesional</LinkScroll>
                </a>
            </li>

            <li className={stylesIndex.item}>
                <a href="">
                    <LinkScroll to="habilidades" smooth={true} duration={3000}>Habilidades</LinkScroll>
                </a>
            </li>

            <li className={stylesIndex.item}>
                <a href="">
                    <LinkScroll to="contacto" smooth={true} duration={3500}>Contacto</LinkScroll>
                </a>
            </li>
        </>
    );
};

export default NavbarHome;