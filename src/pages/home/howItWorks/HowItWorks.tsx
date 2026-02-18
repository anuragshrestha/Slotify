import "./HowItWorks.css";
import homeOwnersIcon from "../../../assets/icons/homeownerIcon.svg";
import professionalIcon from "../../../assets/icons/professionalIcon.svg";
import { HOW_IT_WORKS_DATA } from "./HowItWorks.data";

function HowItWorks() {
  return (
    <div className="howitworks-layout">
      <div>
        <h1 className="howitworks-text">How it works</h1>
        <p className="lookingtohire">
          Whether you're looking to hire or looking to work, Slotify makes the
          process
          <br />
          <span> seamless and secure.</span>
        </p>
      </div>
      <div className="owners-professionals">
        {/** left side */}
        <div className="owner-layout">
          <div className="flex flex-row items-center gap-6">
            <img src={homeOwnersIcon} alt="" className="image" />
            <p className="homeowners-text">For Homeowners</p>
          </div>
          <div className="description-layout">
            {HOW_IT_WORKS_DATA.homeowners.map((data) => (
              <div key={data.number} className="flex items-start gap-6">
                <div className="homeowner-number">
                    {data.number}
                </div>
                <div className="description">
                   <p className="title">
                    {data.title}
                    </p> 
                    <span>
                        {data.description}
                    </span>
                  </div>  
              </div>
            ))}
          </div>
        </div>
        {/** right side */}
        <div className="professional-layout">
          <div className="flex flex-row items-center gap-6">
            <img src={professionalIcon} alt="" className="image" />
            <p className="professionals-text">For Professionals</p>
          </div>
            <div className="description-layout">
            {HOW_IT_WORKS_DATA.professionals.map((data) => (
              <div key={data.number} className="flex items-start gap-6">
                <div className="professional-number">
                    {data.number}
                </div>
                <div className="description">
                   <p className="title">
                    {data.title}
                    </p> 
                    <span>
                        {data.description}
                    </span>
                  </div>  
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
