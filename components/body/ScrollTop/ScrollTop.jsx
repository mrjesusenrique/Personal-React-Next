import styles from "../../../styles/ScrollTop.module.css";
import { Link as LinkScroll } from "react-scroll";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollTop = () => {
  return (
    <div className={styles.contentScrollTop}>
      <LinkScroll
        to="top"
        smooth={true}
        duration={2500}
        className={styles.anchorScrolltop}
      >
        <ArrowUpwardIcon className={styles.imgScrollTop} />
      </LinkScroll>
    </div>
  );
};

export default ScrollTop;
