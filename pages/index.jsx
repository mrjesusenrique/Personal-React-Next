import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/index.module.css';
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Layout>

        <div className={styles.index}>
          <Header />

          <div className={styles.welcome}>

            <h1>Hola! Soy <strong>Jesús Casañas</strong></h1>
            <h1>Desarrollador Web Full Stack Jr.</h1>

            <div className={styles.intro}>
              <p>Estudiante de la <Link href="https://www.educacionit.com/carrera-php"><a target="_blanck" className={styles.carreraE}>Carrera Full Stack PHP Web Developer en EducaciónIT</a></Link>.</p>
              <p>Alumno autodidacta de la Plataforma <Link href="https://www.udemy.com/"><a target="_blanck" className={styles.carreraU} >Udemy</a></Link>.</p>
            </div>

            <div className={styles.buttons}>
              <Link href="/sobre-mi"><a className={styles.btnSobremi}>Sobre Mi</a></Link>
              <Link href="/contacto"><a className={styles.btnContacto}>Contáctame</a></Link>
            </div>

          </div>
        </div>
      </Layout>
    </div>
  );
};

