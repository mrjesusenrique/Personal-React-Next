import styles from "../../../../styles/Sobremi.module.css";
import Fade from "react-reveal/Fade";

const ImgLaboral = () => {
  return (
    <Fade>
      <div className={styles.contenedorImagenLaboral}>
        <figure>
          <img
            className={styles.imgLaboral}
            src="/images/img-laboral.png"
            alt="laboral picture"
          />
        </figure>
      </div>
    </Fade>
  );
};

export default ImgLaboral;
