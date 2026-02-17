import plumbingImage from '../../assets/services/plumbing.jpg';
import electricalImage from '../../assets/services/electrical.jpg';
import hvacImage from '../../assets/services/hvac.jpg';
import autoRepairImage from '../../assets/services/auto-repair.jpg';

export type ServiceProps = {
  image: string;
  type: string;
  text: string;
};

export const services: ServiceProps[] = [
  {
    image: plumbingImage,
    type: "Plumbing",
    text: "Leaks, pipes & installation",
  },
  {
    image: electricalImage,
    type: "Electrical",
    text: "Wiring, lighting & panel upgrades",
  },
  {
    image: hvacImage,
    type: "HVAC",
    text: "Heating, AC & ventilation",
  },
  {
    image: autoRepairImage,
    type: "Auto Repair",
    text: "Maintenance & emergency repairs",
  },
];


