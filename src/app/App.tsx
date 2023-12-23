import './css/App.css'
import Header from './components/Header.tsx'
import SubHeader from './components/SubHeader.tsx'
import DescriptionServices from './components/DescriptionServices.tsx'
import CardService, {CardProps} from './components/CardService.tsx'
import ButtonService from './components/ButtonService.tsx'
import ProvidersInfo from './components/Providers.tsx'
import MobileApp from './components/MobileApp.tsx'
import Slider, {CommentInfo} from './components/Slider.tsx'
import ManageArticles, {ArticleInfo} from './components/ManageArticle.tsx'

function App() {
const cardsData: CardProps[] = [
  {image: '/src/assets/images/service1.svg', title: "Search doctor", description: "Choose your doctor from thousands of specialist, general, and trusted hospitals"},
  {image: '/src/assets/images/service2.png', title: "Online pharmacy", description: "Buy your medicines with our mobile application with a simple delivery system"},
  {image: '/src/assets/images/service3.svg', title: "Consultation", description:"Free consultation with our trusted doctors and get the best recomendations"},
  {image: '/src/assets/images/service4.svg', title: "Details info", description:"Free consultation with our trusted doctors and get the best recomendations"},
  {image: '/src/assets/images/service5.svg', title: "Emergency care", description: "You can get 24/7 urgent care for yourself or your children and your lovely family"},
  {image: '/src/assets/images/service6.png', title: "Tracking", description: "Track and save your medical history and health data"}
]

const commentsData: CommentInfo[] = [
  {image: '/src/assets/images/avatar.png', name: "Edward Newgate", job: "Founder Circle", comment: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"},
  {image: '/src/assets/images/avatar.png', name: "Jacob Robinson", job: "Teacher", comment: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit soluta aliquam qui, at, voluptates architecto, sequi ullam error atque porro temporibus veritatis vero sit”" },
  {image: '/src/assets/images/avatar.png', name: "James Watson", job: "Childcare Worker", comment:"“Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, porro. Sit maxime cupiditate exercitationem laboriosam”"},
  {image: '/src/assets/images/avatar.png', name: "Jesus Collins", job: "Boilermaker", comment: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus libero nobis error quae quam inventore nihil optio dolore exercitationem!”"}
]

const articlesData: ArticleInfo[] = [
  {image: '/src/assets/images/article1.png', title: "Disease detection, check up in the laboratory", description: "In this case, the role of the health laboratory is very important to do a disease detection..."},
  {image: '/src/assets/images/article2.png', title: "Herbal medicines that are safe for consumption", description: "Herbal medicine is very widely used at this time because of its very good for your health..."},
  {image: '/src/assets/images/article3.png', title: "Natural care for healthy facial skin", description: "A healthy lifestyle should start from now and also for your skin health. There are some..."},
  {image: '/src/assets/images/article1.png', title: "Disease detection, check up in the laboratory", description: "In this case, the role of the health laboratory is very important to do a disease detection..."},
  {image: '/src/assets/images/article2.png', title: "Herbal medicines that are safe for consumption", description: "Herbal medicine is very widely used at this time because of its very good for your health..."},
  {image: '/src/assets/images/article3.png', title: "Natural care for healthy facial skin", description: "A healthy lifestyle should start from now and also for your skin health. There are some..."}


]

  return (
    <>
      <Header />
      <SubHeader />
      <DescriptionServices />
      <div className='background-class'>
        <div className="array-cards">
          {cardsData.map((card, index) => (
            <CardService key={index} {...card} />
          ))}
        </div>
      </div>
      <ButtonService />
      <ProvidersInfo />
      <MobileApp />
      <Slider data={commentsData} />
      <ManageArticles data={articlesData} />
    </>
  )
}
export default App
