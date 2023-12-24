import CardService from "./CardService";
import '/src/app/css/components/Services.css'

interface CardProps<CardInfo>{
    data: CardInfo[];
}

interface CardInfo{
    image: string;
    title: string;
    description: string;
}

const ManageCardServices: React.FC<CardProps<CardInfo>> = ({data}) => {
    return(
        <div className='background-class'>
        <div className="array-cards">
            {data.map((card, index) => (
                <CardService key={index} {...card} />
            ))}
            <div className="element-background"><img src='/src/assets/images/element3.svg'></img></div>
        </div>
        <div className="wrap-btn-services">
            <button className="btn-learnmore">Learn more</button>
        </div>
        </div>
    )
  }
  export default ManageCardServices;
  export type {CardInfo};