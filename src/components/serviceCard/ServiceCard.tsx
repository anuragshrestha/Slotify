import './ServiceCard.css'
import type { ServiceProps } from './Services.data';


function ServiceCard({image, type, text} : ServiceProps) {
    return(
     <div className='service-card'>
            <img src={image} alt=''className='service-image'/>
            <p className='service-type'>
                {type}
            </p>
            <span className='service-text'>
                {text}
            </span>
     </div>
    )
}

export default ServiceCard;