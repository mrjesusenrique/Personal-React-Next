import stylesNavResp from "../../../../styles/NavbarResponsive.module.css";
import { Link as LinkScroll } from "react-scroll";

const NavbarResponsive = () => {
  return (
    <>
      <ul>
        <li>
          <LinkScroll
            to="top"
            smooth={true}
            duration={2000}
            className={stylesNavResp.item}
          >
            Inicio
          </LinkScroll>
        </li>

        <li>
          <LinkScroll
            to="sobreMiAcademico"
            smooth={true}
            duration={2200}
            className={stylesNavResp.item}
          >
            Académico
          </LinkScroll>
        </li>

        <li>
          <LinkScroll
            to="sobreMiLaboral"
            smooth={true}
            duration={3000}
            className={stylesNavResp.item}
          >
            Carrera Profesional
          </LinkScroll>
        </li>

        <li>
          <LinkScroll
            to="skills"
            smooth={true}
            duration={3000}
            className={stylesNavResp.item}
          >
            Skills
          </LinkScroll>
        </li>
      </ul>
    </>
  );
};

export default NavbarResponsive;
