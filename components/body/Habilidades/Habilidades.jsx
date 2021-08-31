import styles from '../../../styles/Habilidades.module.css';
import ImgHabilidades from './ImgHabilidades';

const Habilidades = () => {
    return (
        <section className={styles.contenedorHabilidades} id="habilidades">
            <h1 className={styles.titleHabilidades}>Habilidades</h1>
            <ImgHabilidades />
        </section>
    );
};

export default Habilidades;