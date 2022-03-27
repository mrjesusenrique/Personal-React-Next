import styles from "../../../../styles/Skills.module.css";
import Fade from "react-reveal/Fade";
import frontitems from "../../../../utilities/frontItems";

const FrontSkills = () => {
  return (
    <section className={styles.sectionSkillsFront} id="skills">
      <Fade>
        <h1 className={styles.titleFront}>Frontend</h1>
      </Fade>
      <div className={styles.contentFrontSkills}>
        <Fade top cascade>
          <ul>
            {frontitems.map((item) => {
              return <li key={item.key}>{item.text}</li>;
            })}
          </ul>
        </Fade>
      </div>
    </section>
  );
};

export default FrontSkills;
