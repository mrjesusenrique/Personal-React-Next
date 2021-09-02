import styles from '../../../styles/Stack.module.css';
import ImgStack from './ImgStack';

const Stack = () => {
    return (
        <section className={styles.contenedorHabilidades} id="stack">
            <h1 className={styles.titleHabilidades}>Stack</h1>
            <ImgStack />
        </section>
    );
};

export default Stack;