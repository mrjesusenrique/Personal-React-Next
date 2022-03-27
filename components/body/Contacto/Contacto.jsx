import React from "react";
import styles from "../../../styles/Contacto.module.css";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import contact from "../../../utilities/contact";

const contacto = () => {
  return (
    <Fade>
      <section className={styles.container} id="contacto">
        <div className={styles.redes}>
          {contact.map((item, index) => {
            return (
              <div className={styles.red} key={item.key}>
                <Link href={item.link}>
                  <a target="_black">
                    <img className={styles.img} src={item.src} alt={item.alt} />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
};

export default contacto;
