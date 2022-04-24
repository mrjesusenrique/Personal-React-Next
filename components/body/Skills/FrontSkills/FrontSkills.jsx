import styles from "../../../../styles/Skills.module.css";
import Fade from "react-reveal/Fade";
import frontItems from "../../../../utilities/frontItems";
import { useTranslation } from "react-i18next";

const FrontSkills = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.sectionSkillsFront} id="skills">
      <Fade>
        <h1 className={styles.titleFront}>Frontend</h1>
      </Fade>
      <div className={styles.contentFrontSkills}>
        <Fade top cascade>
          <ul>
            {frontItems.map((item) => {
              return <li key={item.key}>{t(`frontSkills.${item.title}`)}</li>;
            })}
          </ul>
        </Fade>
      </div>
    </section>
  );
};

export default FrontSkills;
