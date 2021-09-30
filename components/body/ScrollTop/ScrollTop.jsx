import styles from "../../../styles/ScrollTop.module.css";
import { Link as LinkScroll } from "react-scroll";

const ScrollTop = () => {
  return (
    <div className={styles.contentScrollTop}>
      <a href="" className={styles.anchorScrolltop}>
        <LinkScroll to="top" smooth={true} duration={2500}>
          <img
            className={styles.imgScrollTop}
            src="/images/flecha-arriba.svg"
          />
        </LinkScroll>
      </a>
    </div>
  );
};

export default ScrollTop;
