import styles from "../../../styles/Menu.module.css";

const Menu = ({ onClick }) => {
  return (
    <a className={styles.btnMenu} onClick={onClick}>
      <img className={styles.ImgMenu} src="images/icon_navbar/menu.svg" />
    </a>
  );
};

export default Menu;
