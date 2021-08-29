import styles from '../../../styles/index.module.css';
import Link from 'next/link';

const Presentacion = () => {
    return(
        <div className={styles.welcome}>

            <h1>Hola! Soy <strong>Jesús Casañas</strong></h1>
            <h1>Desarrollador Web Full Stack.</h1>

            <div className={styles.intro}>
              <p>Estudiante de <Link href="http://www.fi.uba.ar/es/node/236"><a target="_blanck" className={styles.carreraE}>Licenciatura en Análisis de Sistemas en la Universidad de Buenos Aires</a></Link>.</p>
              <p>Alumno autodidacta de la Plataforma <Link href="https://www.udemy.com/"><a target="_blanck" className={styles.carreraU} >Udemy</a></Link>.</p>
            </div>

            <div className={styles.buttons}>
              <Link href="/sobre-mi"><a className={styles.btnSobremi}>Sobre Mi</a></Link>
              <Link href="/contacto"><a className={styles.btnContacto}>Contáctame</a></Link>
            </div>

          </div>
    );
};

export default Presentacion; 