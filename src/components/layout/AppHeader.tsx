import styles from "./AppHeader.module.css";
import { useNavigate } from "react-router-dom";

type AppHeaderProps = {
  brandName?: string;
};

function AppHeader({ brandName = "Slotify" }: AppHeaderProps) {

  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.brandMark} aria-hidden="true">
          <span className={`${styles.markSquare} ${styles.markSquareTop}`} />
          <span className={`${styles.markSquare} ${styles.markSquareMiddle}`} />
          <span className={`${styles.markSquare} ${styles.markSquareBottom}`} />
        </span>
        <h1 className={styles.title}>{brandName}</h1>
      </div>

      <nav className={styles.nav} aria-label="Primary">
        <button className={styles.navButton} type="button" onClick={() => navigate("/signin")}>
          Login
        </button>
        <button className={`${styles.navButton} ${styles.signupButton}`} type="button" onClick={() => navigate('/signup')}>
          Signup
        </button>
      </nav>
    </header>
  );
}

export default AppHeader;
