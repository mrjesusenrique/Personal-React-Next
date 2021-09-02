import React from 'react';
import styles from '../../../styles/Contacto.module.css';
import Link from 'next/link';

const contacto = () => {
    return (
        <section className={styles.container} id="contacto">
            <div className={styles.redes}>
                <div className={styles.red}>
                    <Link href="https://www.linkedin.com/in/jes%C3%BAs-casa%C3%B1as-485a86197/"><a target="_black"><img className={styles.img} src="/images/icons_contact/icon_linkedin.svg" alt="LinkedIn" /></a></Link>
                </div>

                <div className={styles.red}>
                    <Link href="https://github.com/mrjesusenrique"><a target="_black"><img className={styles.img} src="/images/icons_contact/icon_github.svg" alt="GitHub" /></a></Link>
                </div>

                <div className={styles.red}>
                    <Link href="https://www.instagram.com/mrjesusenrique/?hl=es"><a target="_black"><img className={styles.img} src="/images/icons_contact/icon_instagram.svg" alt="Instagram" /></a></Link>
                </div>

                <div className={styles.red}>
                    <Link href="#"><a target="_black"><img className={styles.img} src="/images/icons_contact/icon_gmail.svg" alt="Gmail" /></a></Link>
                </div>
            </div>
        </section>
    );
};

export default contacto;