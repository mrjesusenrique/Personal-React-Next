import styles from "../../../../styles/Sobremi.module.css";
import Fade from "react-reveal/Fade";

const ParrafoLaboral = () => {
  return (
    <article className={styles.contenedorParrafoLaboral}>
      <Fade>
        <h1 className={styles.titleSectionLaboral}>Profesional</h1>
      </Fade>
      <Fade>
        <p className={styles.parrafoLaboral}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          unde eius odio molestias nam aperiam ratione est a sit accusantium
          excepturi ipsam aspernatur veritatis vel enim, quas illum quisquam
          dicta?. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid iste molestias libero aut. Iusto quis modi aliquam inventore
          ab maiores molestias facere impedit. Odio neque est in? Quidem,
          voluptates placeat. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eveniet perspiciatis rem quo fugiat exercitationem
          odit laboriosam, harum tenetur quam cupiditate deserunt tempore nobis
          facilis saepe vel distinctio illo sed ab!
        </p>
      </Fade>
    </article>
  );
};

export default ParrafoLaboral;
