import * as Scroll from "react-scroll";
import styles from "../../../styles/ScrollTop.module.css";

const ScrollTop = () => {
  const scroll = Scroll.animateScroll;

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={styles.contentScrollTop}>
      <a href="" onClick={scrollToTop} className={styles.anchorScrolltop}>
        <img className={styles.imgScrollTop} src="/images/flecha-arriba.svg" />
      </a>
    </div>
  );
};

export default ScrollTop;
