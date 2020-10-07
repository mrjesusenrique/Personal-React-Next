import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Sobremi.module.css';
import Link from 'next/link';

const sobreMi = () => {

    return (
        <Layout>
            <section className={styles.section}>
                <div className={styles.contenedorImagen}>
                    <figure>
                        <img className={styles.img} src="/images/sobremi.PNG" alt="profile picture" />
                        <figcaption className={styles.fig}>Buenos Aires, Argentina 2018</figcaption>
                    </figure>
                </div>

                <div className={styles.contenedorParrafo}>
                    <p className={styles.parrafo}>¡Hola! Mi nombre es <strong className={styles.noStrong}>Jesús Casañas</strong>, soy estudiante de <strong className={styles.noStrong}>Desarrollo
                        y Programación Web</strong> en <strong><Link href="https://www.educacionit.com/"><a className={styles.link} target="_blanck">EducaciónIT</a></Link> </strong>
                        Buenos Aires, ahora tengo 23 años, hace aproximadamente tres años partí de Caracas, Venezuela
                        rumbo a la Capital Argentina en búsqueda de una oportunidad de desarrollo y superación tanto
                        personal como familiar. Desde que arribé enfoqué mis estudios profesionales en el área de
                        <strong className={styles.noStrong}> Desarrollo y Programación Web</strong>, hoy por hoy puedo traer este sitio que representa mi trabajo y
                        habilidades en el campo. Si quieres conocer más acerca de mí y mi trabajo haz click
                        <Link href="#"><a className={styles.link}> acá</a></Link>.
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export default sobreMi;