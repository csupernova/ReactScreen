interface CardProps{
    image: string;
    title: string;
    description: string;
}

const CardServices: React.FC<CardProps>= ({image, title, description}) => {

    return (
            <div className="card">
                <img className="card-image" src={image}></img>
                <h3 className="card-title" >{title}</h3>
                <p className="card-desc">{description}</p>
        </div>
    )
}
export default CardServices;
export type { CardProps };