import styles from "../../../../styles/Sobremi.module.css";
import ParrafoLaboral from "./ParrafoLaboral";
import ImgLaboral from "./ImgLaboral";
import Fade from "react-reveal/Fade";

const Laboral = () => {
  return (
    <Fade>
      <section className={styles.section} id="sobreMiLaboral">
        <ParrafoLaboral />
        <ImgLaboral />
      </section>
    </Fade>
  );
};

export default Laboral;
