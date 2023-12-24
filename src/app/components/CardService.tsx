import { CardInfo } from "./ManageCardServices";


const CardServices: React.FC<CardInfo>= ({image, title, description}) => {

    return (
            <div className="card">
                <img className="card-image" src={image}></img>
                <h3 className="card-title" >{title}</h3>
                <p className="card-desc">{description}</p>
        </div>
    )
}
export default CardServices;