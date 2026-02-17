import AppHeader from "../../components/layout/AppHeader";
import HeroSection from "./sections/HeroSection";
import styles from "./HomePage.module.css";
import PopularServices from "./popularServices/PopularServices";

function HomePage() {
  return (
    <div className={styles.root}>
      <AppHeader />
      <HeroSection />
      <PopularServices/>
    </div>
  );
}

export default HomePage;
