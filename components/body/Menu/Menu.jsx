import styles from "../../../styles/Menu.module.css";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = ({ onClick }) => {
  return (
    <a className={styles.btnMenu} onClick={onClick}>
      <MenuIcon className={styles.ImgMenu} />
    </a>
  );
};

export default Menu;
