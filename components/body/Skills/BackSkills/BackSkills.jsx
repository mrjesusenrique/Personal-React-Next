import styles from "../../../../styles/Skills.module.css";
import Fade from "react-reveal/Fade";
import backItems from "../../../../utilities/backItems";
import { useTranslation } from "react-i18next";

const BackSkills = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.sectionSkillBack} id="skills">
      <Fade>
        <h1 className={styles.titleBack}>Backend</h1>
      </Fade>
      <div className={styles.contentBackSkills}>
        <Fade bottom cascade>
          <ul>
            {backItems.map((item) => {
              return <li key={item.key}>{t(`backSkills.${item.title}`)}</li>;
            })}
          </ul>
        </Fade>
      </div>
    </section>
  );
};

export default BackSkills;
