import AppHeader from "../../components/layout/AppHeader";
import HeroSection from "./sections/HeroSection";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.root}>
      <AppHeader />
      <HeroSection />
    </div>
  );
}

export default HomePage;
