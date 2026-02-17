import tickIcon from "../../assets/icons/tickIcon.svg";
import styles from "./VerifiedBadge.module.css";

type VerifiedBadgeProps = {
  label: string;
};

function VerifiedBadge({ label }: VerifiedBadgeProps) {
  return (
    <div className={styles.badge}>
      <img src={tickIcon} className={styles.icon} alt="" aria-hidden="true" />
      <p>{label}</p>
    </div>
  );
}

export default VerifiedBadge;
