import "./App.css";
import tickIcon from '../src/assets/icons/tickIcon.svg'

function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            <span className="mark-square mark-square--top" />
            <span className="mark-square mark-square--middle"/>
            <span className="mark-square mark-square--bottom"/>
          </span>
          <h1 className="app-title">Splotify</h1>
        </div>
        <nav className="header-nav">
          <button className="btn btn-login" type="button">
            Login
          </button>
          <button className="btn btn-signup" type="button">
            Signup
          </button>
        </nav>
      </header>
      <div className="home-content">
        {/** left side */}
        <div>
         <div className="home-verified-text">
          <img src={tickIcon} className="tick-icon" alt="" aria-hidden="true"/>
          <p>
            VERIFIED PROFESSIONALS
          </p>
         </div>
        </div>
        <h1 className="title">
          <span className="title-blue"> Expert help for your home,</span>
          <span className="title-white"> just a click away.</span>
        </h1>
        <p className="connecting-homeowners">
          Connecting homeowners with top-rated professional contractors for plumbing, electrical, HVAC, and more.
        </p>

        {/** right side */}
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
