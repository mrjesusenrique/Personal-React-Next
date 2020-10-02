import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Contacto.module.css';
import Link from 'next/link';

const contacto = () => {
    return (
        <Layout>
            <div className={styles.container}>

                <div className={styles.contacto}>
                    <div className={styles.title}>
                        <h1>Contáctame a través de:</h1>
                    </div>

                    <div className={styles.redes}>
                        <div className={styles.red}>
                            <Link href="https://www.linkedin.com/in/jes%C3%BAs-casa%C3%B1as-485a86197/"><a target="_black"><img className={styles.img} src="/images/linkedin.png" alt="LinkedIn" /></a></Link>
                            <p>LinkedIn</p>
                        </div>

                        <div className={styles.red}>
                            <Link href="https://github.com/mrjesusenrique"><a target="_black"><img className={styles.img} src="/images/github.png" alt="GitHub" /></a></Link>
                            <p>GitHub</p>
                        </div>

                        <div className={styles.red}>
                            <Link href="https://www.instagram.com/mrjesusenrique/?hl=es"><a target="_black"><img className={styles.img} src="/images/instagram.png" alt="Instagram" /></a></Link>
                            <p>Instagram</p>
                        </div>

                        <div className={styles.red}>
                            <Link href="#"><a target="_black"><img className={styles.img} src="/images/gmail.png" alt="Gmail" /></a></Link>
                            <p>Gmail</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default contacto;