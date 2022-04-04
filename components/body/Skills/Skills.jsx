import styles from "../../../styles/Skills.module.css";
import FrontSkills from "./FrontSkills/FrontSkills";
import BackSkills from "./BackSkills/BackSkills";

const Skills = () => {
  return (
    <section className={styles.sectionSkills}>
      <FrontSkills />
      <BackSkills />
    </section>
  );
};

export default Skills;
