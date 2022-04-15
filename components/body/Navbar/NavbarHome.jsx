import stylesIndex from "../../../styles/HeaderIndex.module.css";
import items from "../../../utilities/items";
import { Link as LinkScroll } from "react-scroll";
import { useTranslation } from "react-i18next";

const NavbarHome = () => {
  const { t } = useTranslation();

  return (
    <>
      {items.map((item, index) => {
        return (
          <li className={stylesIndex.item} key={item.key}>
            <LinkScroll
              index={index}
              to={item.to}
              smooth={item.smooth}
              duration={item.duration}
              style={{ cursor: "pointer" }}
            >
              {t(`header.navBar.${item.title}`)}
            </LinkScroll>
          </li>
        );
      })}
    </>
  );
};

export default NavbarHome;
