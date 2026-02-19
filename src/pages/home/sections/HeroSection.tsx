import plumberImage from "../../../assets/plumberImage.png";
import VerifiedBadge from "../../../components/ui/VerifiedBadge";
import { HOME_HERO_COPY } from "../home.data";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.content}>
      <div className={styles.layout}>
        <div className={styles.left}>
          <VerifiedBadge label={HOME_HERO_COPY.verifiedLabel} />

          <h2 className={styles.title}>
            <span className={styles.titlePrimary}> {HOME_HERO_COPY.titleIntro}</span>
            <span className={styles.titleAccent}> {HOME_HERO_COPY.titleHighlight}</span>
          </h2>

          <p className={styles.description}>{HOME_HERO_COPY.description}</p>
        </div>

        <div className={styles.right}>
          <img className={styles.heroImage} src={plumberImage} alt="Professional fixing pipe" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
