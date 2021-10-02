import styles from "../../../../styles/Skills.module.css";
import Fade from "react-reveal/Fade";

const BackSkills = () => {
  return (
    <section className={styles.sectionSkillBack} id="skills">
      <Fade>
        <h1 className={styles.titleBack}>Backend</h1>
      </Fade>
      <div className={styles.contentBackSkills}>
        <Fade bottom cascade>
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

export default BackSkills;
