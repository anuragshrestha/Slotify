import "./SignupPage.css";
import tickIcon from "../../assets/icons/whiteTickIcon.svg";
import lockIcon from "../../assets/icons/whiteLockIcon.svg";
import cardIcon from "../../assets/icons/whiteCardIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";
import inputLockIcon from "../../assets/icons/inputLockIcon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [isContractor, setIsContractor] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="signup-page">
      <div className="brand">
        <span className="brandMark" aria-hidden="true">
          <span className="markSquare markSquareTop" />
          <span className="markSquare markSquareMiddle" />
          <span className="markSquare markSquareBottom" />
        </span>
        <h1 className="title" onClick={() => navigate('/')}>Slotify</h1>
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
              <img
                src={tickIcon}
                alt=""
                aria-hidden="true"
                className="tick-icon"
              />
              <span>Verified Contractors &amp; Businesses.</span>
            </li>

            <li className="benefits-item">
              <img
                src={lockIcon}
                alt=""
                aria-hidden="true"
                className="tick-icon"
              />
              End-to-End Encrypted Communication.
            </li>
            <li className="benefits-item">
              <img
                src={cardIcon}
                alt=""
                aria-hidden="true"
                className="tick-icon"
              />
              Secure Milestone-Based Payments.
            </li>
          </ul>
        </section>
        {/** right section */}
        <section className="right-section">
          <div className="inner-section">
            <p className="welcome-text">Welcome to Slotify</p>
            <p className="please-text">Please create your account below</p>
            <div style={{ margin: "10% 4% 0" }}>
              <div className="user-toggle">
                <button
                  className={`user-button ${!isContractor ? "active" : ""}`}
                  onClick={() => setIsContractor(false)}
                >
                  I am a User
                </button>
                <button
                  className={`user-button ${isContractor ? "active" : ""}`}
                  onClick={() => setIsContractor(true)}
                >
                  I am a Contractor
                </button>
              </div>
              <p className="email-address">Email Address</p>
              <div className="email-input">
                <img
                  src={emailIcon}
                  alt=""
                  aria-hidden="true"
                  className="input-icon"
                />
                <input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="name@domain.com"
                />
              </div>
              <div className="password-outer">
                <p className="password">Password</p>
              </div>

              <div className="password-input">
                <img
                  src={inputLockIcon}
                  alt=""
                  aria-hidden="true"
                  className="input-icon"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <button className="signin-button">Signup</button>
              <div className="create-account">
                <span className="new-slotify">Already have an account?</span>
                <button className="create-account-button" onClick={() => navigate('/signin')}>
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignupPage;
