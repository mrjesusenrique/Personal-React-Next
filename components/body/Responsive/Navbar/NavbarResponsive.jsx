import stylesNavResp from "../../../../styles/NavbarResponsive.module.css";
import items from "../../../../utilities/items";
import { Link as LinkScroll } from "react-scroll";

const NavbarResponsive = () => {
  return (
    <div className={stylesNavResp.sidebar}>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <LinkScroll
                to={item.to}
                smooth={item.smooth}
                duration={item.duration}
                className={stylesNavResp.item}
              >
                {item.title}
              </LinkScroll>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarResponsive;
