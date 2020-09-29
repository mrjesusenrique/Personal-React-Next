import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/index.module.css';
import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Layout>
        <div className={styles.index}>
          <Header />

          <main>
            <div className={styles.welcome}>
              <h1 className="text-4xl">Hola! Soy <strong className="font-light">Jesús Casañas</strong></h1>
              <h1 className="text-4xl">Desarrollador Web Full Stack Jr.</h1>
              <p className="text-4xl">Bienvenido a mi Sitio</p>
              <Link href="/contacto"><a>Contáctame</a></Link>
            </div>
          </main>

        </div>
      </Layout>
    </div>
  );
};

