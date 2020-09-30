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

            <h1>Hola! Soy <strong className="font-light">Jesús Casañas</strong></h1>
            <h1>Desarrollador Web Full Stack Jr.</h1>

            <div className={styles.intro}>
            
            </div>

            <div className={styles.buttons}>
              <Link href="/contacto"><a className={styles.btnSobremi}>Sobre Mi</a></Link>
              <Link href="/contacto"><a className={styles.btnContacto}>Contáctame</a></Link>
            </div>

          </div>
        </div>
      </Layout>
    </div>
  );
};

