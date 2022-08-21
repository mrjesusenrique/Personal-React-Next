import Projects from "./data/projects";
import Card from "./Card/Card";
import styles from "../../../styles/Portfolio.module.css";
import Fade from "react-reveal/Fade";

const Portfolio = () => {
  return (
    <section className={styles.portfolioContainer} id="portfolio">
      <Fade>
        <h1 className={styles.portfolioTitle}>Portfolio</h1>
      </Fade>
      <section className={styles.cardContainer}>
        {Projects.map(({ key, title, img, href }) => {
          return (
            <Fade key={key}>
              <Card title={title} img={img} href={href} />
            </Fade>
          );
        })}
      </section>
    </section>
  );
};

export default Portfolio;
