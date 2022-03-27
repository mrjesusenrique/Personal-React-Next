import styles from "../../../../styles/Skills.module.css";
import Fade from "react-reveal/Fade";
import backItems from "../../../../utilities/backItems";

const BackSkills = () => {
  return (
    <section className={styles.sectionSkillBack} id="skills">
      <Fade>
        <h1 className={styles.titleBack}>Backend</h1>
      </Fade>
      <div className={styles.contentBackSkills}>
        <Fade bottom cascade>
          <ul>
            {backItems.map((item) => {
              return <li key={item.key}>{item.text}</li>;
            })}
          </ul>
        </Fade>
      </div>
    </section>
  );
};

export default BackSkills;
