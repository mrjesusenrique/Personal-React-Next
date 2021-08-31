import styles from '../../../../styles/Sobremi.module.css';

const ImgLaboral = () => {
    return (
        <div className={styles.contenedorImagenLaboral}>
            <figure>
                <img className={styles.imgLaboral} src="/images/img-laboral.png" alt="laboral picture" />
            </figure>
        </div>
    );
};

export default ImgLaboral;