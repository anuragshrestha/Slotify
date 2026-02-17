import "./PopularServices.css";
import ServiceCard from "../../../components/serviceCard/ServiceCard";
import { services } from "../../../components/serviceCard/Services.data";

function PopularServices() {
  return (
    <div className="popular-service">
      <p className="popular-title">Popular Services</p>
      <span className="connected-text">
        Get Connected with exports in these top categories
      </span>
      <div className="services-grid">
    {services.map((service) => (
        <ServiceCard key={service.type} {...service}/>
      ))}
      </div>
  
    </div>
  );
}

export default PopularServices;
