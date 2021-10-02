import styles from "../../../../styles/Sobremi.module.css";
import Fade from "react-reveal/Fade";

const ImgAcademico = () => {
  return (
    <Fade>
      <div className={styles.contenedorImagen}>
        <figure>
          <img
            className={styles.img}
            src="/images/profile_photo.jpeg"
            alt="profile picture"
          />
          <figcaption className={styles.fig}>
            Buenos Aires, Argentina 2021
          </figcaption>
        </figure>
      </div>
    </Fade>
  );
};

export default ImgAcademico;
