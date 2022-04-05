import styles from "../../../styles/ScrollTop.module.css";
import { Link as LinkScroll } from "react-scroll";

const ScrollTop = () => {
  return (
    <div className={styles.contentScrollTop}>
      <LinkScroll
        to="top"
        smooth={true}
        duration={2500}
        className={styles.anchorScrolltop}
      >
        <img
          className={styles.imgScrollTop}
          src="/images/flecha-arriba.svg"
          title="Volver arriba"
        />
      </LinkScroll>
    </div>
  );
};

export default ScrollTop;
