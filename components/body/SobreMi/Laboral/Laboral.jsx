import styles from '../../../../styles/Sobremi.module.css';
import ParrafoLaboral from './ParrafoLaboral';
import ImgLaboral from './ImgLaboral';

const Laboral = () => {
    return (
        <section className={styles.section} id="sobreMiLaboral">
            <ParrafoLaboral />
            <ImgLaboral />
        </section>
    );
};

export default Laboral;