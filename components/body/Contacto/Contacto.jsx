import styles from "../../../styles/Contacto.module.css";
import Link from "next/link";
import contact from "../../../utilities/contact";

const contacto = () => {
  return (
    <section className={styles.container} id="contacto">
      <div className={styles.redes}>
        {contact.map((item) => {
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
  );
};

export default contacto;
