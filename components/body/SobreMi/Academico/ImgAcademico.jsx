import styles from '../../../../styles/Sobremi.module.css';

const ImgAcademico = () => {
    return (
        <div className={styles.contenedorImagen}>
            <figure>
                <img className={styles.img} src="/images/sobremi.PNG" alt="profile picture" />
                <figcaption className={styles.fig}>Buenos Aires, Argentina 2018</figcaption>
            </figure>
        </div>
    );
};

export default ImgAcademico;