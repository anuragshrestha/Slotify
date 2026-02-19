import AppHeader from "../../components/layout/AppHeader";
import HeroSection from "./sections/HeroSection";
import styles from "./HomePage.module.css";
import PopularServices from "./popularServices/PopularServices";
import HowItWorks from "./howItWorks/HowItWorks";

function HomePage() {
  return (
    <div className={styles.root}>
      <AppHeader />
      <HeroSection />
      <PopularServices/>
      <HowItWorks/>
    </div>
  );
}

export default HomePage;
