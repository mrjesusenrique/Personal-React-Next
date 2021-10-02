import styles from "../../../../styles/Skills.module.css";
import Fade from "react-reveal/Fade";

const FrontSkills = () => {
  return (
    <section className={styles.sectionSkillsFront} id="skills">
      <Fade>
        <h1 className={styles.titleFront}>Frontend</h1>
      </Fade>
      <div className={styles.contentFrontSkills}>
        <Fade top cascade>
          <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.
            </li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          </ul>
        </Fade>
      </div>
    </section>
  );
};

export default FrontSkills;
