import styles from "../../../../styles/Sobremi.module.css";
import Fade from "react-reveal/Fade";

const ImgAcademico = () => {
  return (
    <Fade>
      <div className={styles.contenedorImagen}>
        <figure>
          <img
            className={styles.img}
            src="/images/academico.png"
            alt="academico"
          />
        </figure>
      </div>
    </Fade>
  );
};

export default ImgAcademico;
