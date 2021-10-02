import styles from "../../../styles/Stack.module.css";
import Flip from "react-reveal/Flip";

const ImgStack = () => {
  return (
    <section className={styles.sectionImages}>
      <div>
        <Flip bottom>
          <div className={styles.divImage}>
            <img
              className={styles.imgTech}
              src="/images/icons_tech/icon_html5.svg"
              alt="HTML5"
              title="HTML5"
            />
          </div>
        </Flip>
        <Flip bottom>
          <div className={styles.divImage}>
            <img
              className={styles.imgTech}
              src="/images/icons_tech/icon_css3.svg"
              alt="CSS3"
              title="CSS3"
            />
          </div>
        </Flip>
        <Flip bottom>
          <div className={styles.divImage}>
            <img
              className={styles.imgTech}
              src="/images/icons_tech/icon_sass.svg"
              alt="Sass"
              title="Sass"
            />
          </div>
        </Flip>
      </div>
      <div>
        <Flip bottom>
          <div className={styles.divImage}>
            <img
              className={styles.imgTech}
              src="/images/icons_tech/icon_js.svg"
              alt="Javascript"
              title="Javascript"
            />
          </div>
        </Flip>
        <Flip bottom>
          <div className={styles.divImage}>
            <img
              className={styles.imgTech}
              src="/images/icons_tech/icon_react.svg"
              alt="ReactJS"
              title="ReactJS"
            />
          </div>
        </Flip>
        <Flip bottom>
          <div className={styles.divImage}>
            <img
              className={styles.imgTech}
              src="/images/icons_tech/icon_next.svg"
              alt="Next.js"
              title="Next.js"
            />
          </div>
        </Flip>
      </div>
      <div>
        <Flip bottom>
          <div className={styles.divImage}>
            <img
              className={styles.imgTech}
              src="/images/icons_tech/icon_node.svg"
              alt="Node.js"
              title="Node.js"
            />
          </div>
        </Flip>
        <Flip bottom>
          <div className={styles.divImage}>
            <img
              className={styles.imgTech}
              src="/images/icons_tech/icon_express.svg"
              alt="Express.js"
              title="Express.js"
            />
          </div>
        </Flip>
        <Flip bottom>
          <div className={styles.divImage}>
            <img
              className={styles.imgTech}
              src="/images/icons_tech/icon_mongo.svg"
              alt="MongoDB"
              title="MongoDB"
            />
          </div>
        </Flip>
      </div>
    </section>
  );
};

export default ImgStack;
