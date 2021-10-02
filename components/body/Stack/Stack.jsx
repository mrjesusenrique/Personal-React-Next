import styles from "../../../styles/Stack.module.css";
import ImgStack from "./ImgStack";
import Fade from "react-reveal/Fade";

const Stack = () => {
  return (
    <section className={styles.contenedorHabilidades} id="stack">
      <Fade>
        <h1 className={styles.titleHabilidades}>Stack</h1>
      </Fade>
      <ImgStack />
    </section>
  );
};

export default Stack;
