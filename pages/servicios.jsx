import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Servicios.module.css';

const servicios = () => {
    return (
        <Layout>
            <section className={styles.container}>
                <div className={styles.servicio}>
                    <img src="/images/maquetacion.png" alt="Maquetación"></img>
                    <h2>Maquetación</h2>
                    <p>Texto o párrafo descriptivo del servicio Texto o párrafo descriptivo del servicio Texto o párrafo descriptivo del servicio Texto o párrafo descriptivo del servicio</p>
                </div>
                <div className={styles.servicio}>
                    <img src="/images/desarrollo.png" alt="Desarrollo Front-End"></img>
                    <h2>Desarrollo Front-End</h2>
                    <p>Texto o párrafo descriptivo del servicio Texto o párrafo descriptivo del servicio Texto o párrafo descriptivo del servicio Texto o párrafo descriptivo del servicio</p>
                </div>
                <div className={styles.servicio}>
                    <img src="/images/spa.png" alt="Single Page Application"></img>
                    <h2>Single Page Application</h2>
                    <p>Texto o párrafo descriptivo del servicio Texto o párrafo descriptivo del servicio Texto o párrafo descriptivo del servicio Texto o párrafo descriptivo del servicio</p>
                </div>
                <div className={styles.servicio}>
                    <img src="/images/mantenimiento.png" alt="Mantenimiento"></img>
                    <h2>Mantenimiento</h2>
                    <p>Texto o párrafo descriptivo del servicio Texto o párrafo descriptivo del servicio Texto o párrafo descriptivo del servicio Texto o párrafo descriptivo del servicio</p>
                </div>
            </section>
        </Layout>
    );
};

export default servicios;