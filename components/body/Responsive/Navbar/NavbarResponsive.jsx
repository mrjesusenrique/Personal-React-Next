import stylesNavResp from "../../../../styles/NavbarResponsive.module.css";
import items from "../../../../utilities/items";
import { Link as LinkScroll } from "react-scroll";
import { useTranslation } from "react-i18next";

const NavbarResponsive = ({ setToggleSidebar }) => {
  const { t } = useTranslation();

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
                {t(`header.navBar.${item.title}`)}
              </LinkScroll>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarResponsive;
