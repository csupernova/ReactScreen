import './css/App.css'
import Header from './components/Header.tsx'
import SubHeader from './components/subHeader.tsx'
import DescriptionServices from './components/DescriptionServices.tsx'
import CardService, {CardProps} from './components/CardService.tsx'
import ButtonService from './components/ButtonService.tsx'

function App() {
const cardsData: CardProps[] =[
  {image: '/src/assets/images/service1.svg', title: "Search doctor", description: "Choose your doctor from thousands of specialist, general, and trusted hospitals"},
  {image: '/src/assets/images/service2.png', title: "Online pharmacy", description: "Buy your medicines with our mobile application with a simple delivery system"},
  {image: '/src/assets/images/service3.svg', title: "Consultation", description:"Free consultation with our trusted doctors and get the best recomendations"},
  {image: '/src/assets/images/service4.svg', title: "Details info", description:"Free consultation with our trusted doctors and get the best recomendations"},
  {image: '/src/assets/images/service5.svg', title: "Emergency care", description: "You can get 24/7 urgent care for yourself or your children and your lovely family"},
  {image: '/src/assets/images/service6.png', title: "Tracking", description: "Track and save your medical history and health data"}
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
    </>
  )
}
export default App
