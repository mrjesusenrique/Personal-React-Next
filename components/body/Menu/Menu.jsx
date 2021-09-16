import styles from '../../../styles/Menu.module.css';

const Menu = () => {
    return (
        <a className={styles.btnMenu}>
            <img className={styles.ImgMenu} src="images/icon_navbar/menu.svg" />
        </a>
    );
};

export default Menu;