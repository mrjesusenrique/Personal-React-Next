import styles from "../../../../styles/Portfolio.module.css";

const Card = ({ title, img, href }) => {
  return (
    <article className={styles.card}>
      <a className={styles.cardLink} target="_blanck" href={href}>
        <img className={styles.cardImg} src={img} alt={title} title={title} />
        <h2 className={styles.cardTitle}>{title}</h2>
      </a>
    </article>
  );
};

export default Card;
