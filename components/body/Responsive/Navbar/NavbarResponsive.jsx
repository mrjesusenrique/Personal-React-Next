import stylesNavResp from "../../../../styles/NavbarResponsive.module.css";
import { Link as LinkScroll } from "react-scroll";

const NavbarResponsive = () => {
  return (
    <div className={stylesNavResp.sidebar}>
      <ul>
        <li>
          <LinkScroll
            to="top"
            smooth={true}
            duration={0}
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
            duration={3500}
            className={stylesNavResp.item}
          >
            Skills
          </LinkScroll>
        </li>

        <li>
          <LinkScroll
            to="stack"
            smooth={true}
            duration={4000}
            className={stylesNavResp.item}
          >
            Stack
          </LinkScroll>
        </li>
      </ul>
    </div>
  );
};

export default NavbarResponsive;
