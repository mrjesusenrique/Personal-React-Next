import stylesIndex from "../../../styles/HeaderIndex.module.css";
import items from "../../../utilities/items";
import { Link as LinkScroll } from "react-scroll";

const NavbarHome = () => {
  return (
    <>
      {items.map((item) => {
        return (
          <li className={stylesIndex.item}>
            <LinkScroll
              to={item.to}
              smooth={item.smooth}
              duration={item.duration}
              style={{ cursor: "pointer" }}
            >
              {item.title}
            </LinkScroll>
          </li>
        );
      })}
    </>
  );
};

export default NavbarHome;
