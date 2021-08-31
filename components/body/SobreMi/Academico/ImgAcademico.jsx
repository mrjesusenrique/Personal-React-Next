import styles from '../../../../styles/Sobremi.module.css';

const ImgAcademico = () => {
    return (
        <div className={styles.contenedorImagen}>
            <figure>
                <img className={styles.img} src="/images/profile_photo.jpeg" alt="profile picture" />
                <figcaption className={styles.fig}>Buenos Aires, Argentina 2021</figcaption>
            </figure>
        </div>
    );
};

export default ImgAcademico;