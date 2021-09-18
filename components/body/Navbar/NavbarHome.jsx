import stylesIndex from "../../../styles/HeaderIndex.module.css";
import { Link as LinkScroll } from "react-scroll";

const NavbarHome = () => {
  return (
    <>
      <li className={stylesIndex.item}>
        <a href="">
          <LinkScroll to="top" smooth={true} duration={2000}>
            Inicio
          </LinkScroll>
        </a>
      </li>

      <li className={stylesIndex.item}>
        <a href="">
          <LinkScroll to="sobreMiAcademico" smooth={true} duration={2200}>
            Académico
          </LinkScroll>
        </a>
      </li>

      <li className={stylesIndex.item}>
        <a href="">
          <LinkScroll to="sobreMiLaboral" smooth={true} duration={3000}>
            Carrera Profesional
          </LinkScroll>
        </a>
      </li>

      <li className={stylesIndex.item}>
        <a href="">
          <LinkScroll to="skills" smooth={true} duration={3000}>
            Skills
          </LinkScroll>
        </a>
      </li>

      <li className={stylesIndex.item}>
        <a href="">
          <LinkScroll to="stack" smooth={true} duration={3500}>
            Stack
          </LinkScroll>
        </a>
      </li>
    </>
  );
};

export default NavbarHome;
