import { ArticleInfo } from "./ManageArticle";

const CardArticle: React.FC<ArticleInfo>= ({image, title, description}) => {

    return (
            <div className="article">
                <img className="article-image" src={image}></img>
                <h3 className="article-title" >{title}</h3>
                <p className="article-desc">{description}</p>
                <p className="read-more">Read more</p>
        </div>
    )
}
export default CardArticle;