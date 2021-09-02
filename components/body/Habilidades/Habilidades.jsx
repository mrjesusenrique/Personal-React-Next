import styles from '../../../styles/Habilidades.module.css';
import ImgHabilidades from './ImgHabilidades';

const Habilidades = () => {
    return (
        <section className={styles.contenedorHabilidades} id="stack">
            <h1 className={styles.titleHabilidades}>Stack</h1>
            <ImgHabilidades />
        </section>
    );
};

export default Habilidades;