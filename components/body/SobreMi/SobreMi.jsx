import styles from '../../../styles/Sobremi.module.css';
import TextoSobreMi from './TextoSobreMi';
import ImgSobreMi from './ImgSobreMi';

const sobreMi = () => {

    return (
        <section className={styles.section}>
            <ImgSobreMi />
            <TextoSobreMi />
        </section>

    );
};

export default sobreMi;