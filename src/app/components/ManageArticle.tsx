
import ArticlesTitle from './ArticlesTitle.tsx'
import CardArticle from './CardArticle.tsx'
import { useState } from 'react';

interface ArticleProps<ArticleInfo>{
    data: ArticleInfo[];
}
interface ArticleInfo{
    image: string;
    title: string;
    description: string;
}

  const ManageArticles: React.FC<ArticleProps<ArticleInfo>> = ({data}) => {
    const [viewAll, setViewAll] = useState(false);
    const toggleViewAll = () => {
        setViewAll((prevViewAll) => !prevViewAll)
    }
    const articlesCount = viewAll ? 6 : 3;
    return (
        <div>
        <ArticlesTitle />
        <div className='array-articles'>
        {data.slice(0, articlesCount).map((article, index) =>(
            <CardArticle key={index} {...article} />
        ))}
                <div className="wrap-btn-view-all">
            <button className="btn-view-all" onClick={toggleViewAll}>{viewAll? 'Hide' : 'View All'}</button>
            </div>
        </div>
        </div>
)
  }

  export default ManageArticles;
  export type {ArticleInfo};