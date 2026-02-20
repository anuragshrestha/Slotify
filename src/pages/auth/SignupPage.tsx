import "./SignupPage.css";
import tickIcon from "../../assets/icons/whiteTickIcon.svg";
import lockIcon from "../../assets/icons/whiteLockIcon.svg";
import cardIcon from "../../assets/icons/whiteCardIcon.svg";

function SignupPage() {
  return (
    <div className="signup-page">
      <div className="brand">
        <span className="brandMark" aria-hidden="true">
          <span className="markSquare markSquareTop" />
          <span className="markSquare markSquareMiddle" />
          <span className="markSquare markSquareBottom" />
        </span>
        <h1 className="title">Slotify</h1>
      </div>
      <main className="signup-layout">
        {/** left section */}
        <section className="left-section">
          <p className="trusted-text">TRUSTED BY 10K+ PROFESSIONALS</p>
          <h2>Connect with industry experts.</h2>
          <p className="left-description">
            Whether you&apos;re looking for top-tier talent or your next big
            project, ProConnect provides the secure platform you need to grow.
          </p>
          <ul className="benefits">
            <li className="benefits-item">
              <img src={tickIcon} alt="" aria-hidden='true' className="tick-icon" />
              <span>Verified Contractors &amp; Businesses.</span>
            </li>

            <li className="benefits-item">
              <img src={lockIcon} alt="" aria-hidden="true" className="tick-icon" />
              End-to-End Encrypted Communication.
            </li>
            <li className="benefits-item">
              <img src={cardIcon} alt="" aria-hidden="true" className="tick-icon" />
              Secure Milestone-Based Payments.
            </li>
          </ul>
        </section>
        {/** right section */}
        <section className="right-section">
          <div className="inner-section">
            <p className="welcome-text">Welcome Back</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignupPage;
