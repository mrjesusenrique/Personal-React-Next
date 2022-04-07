import stylesNavResp from "../../../../styles/NavbarResponsive.module.css";
import items from "../../../../utilities/items";
import { Link as LinkScroll } from "react-scroll";

const NavbarResponsive = ({ setToggleSidebar }) => {
  const itemClick = () => {
    setToggleSidebar(false);
  };

  return (
    <div className={stylesNavResp.sidebar}>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={item.key}>
              <LinkScroll
                index={index}
                to={item.to}
                smooth={item.smooth}
                duration={item.duration}
                className={stylesNavResp.item}
                onClick={itemClick}
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
