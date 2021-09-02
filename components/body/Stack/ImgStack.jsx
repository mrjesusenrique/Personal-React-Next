import styles from '../../../styles/Stack.module.css';

const ImgStack = () => {
    return (
        <section className={styles.sectionImages}>
            <div className={styles.divImage}>
                <img className={styles.imgTech} src="/images/icons_tech/icon_html5.svg" alt="HTML5" title="HTML5" />
            </div>
            <div className={styles.divImage}>
                <img className={styles.imgTech} src="/images/icons_tech/icon_css3.svg" alt="CSS3" title="CSS3" />
            </div>
            <div className={styles.divImage}>
                <img className={styles.imgTech} src="/images/icons_tech/icon_sass.svg" alt="Sass" title="Sass" />
            </div>
            <div className={styles.divImage}>
                <img className={styles.imgTech} src="/images/icons_tech/icon_js.svg" alt="Javascript" title="Javascript" />
            </div>
            <div className={styles.divImage}>
                <img className={styles.imgTech} src="/images/icons_tech/icon_react.svg" alt="ReactJS" title="ReactJS" />
            </div>
            <div className={styles.divImage}>
                <img className={styles.imgTech} src="/images/icons_tech/icon_next.svg" alt="Next.js" title="Next.js" />
            </div>
            <div className={styles.divImage}>
                <img className={styles.imgTech} src="/images/icons_tech/icon_node.svg" alt="Node.js" title="Node.js" />
            </div>
            <div className={styles.divImage}>
                <img className={styles.imgTech} src="/images/icons_tech/icon_express.svg" alt="Express.js" title="Express.js" />
            </div>
            <div className={styles.divImage}>
                <img className={styles.imgTech} src="/images/icons_tech/icon_mongo.svg" alt="MongoDB" title="MongoDB" />
            </div>
        </section>
    );
};

export default ImgStack;