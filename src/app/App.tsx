import './css/App.css'
import Header from './components/Header.tsx'
import SubHeader from './components/SubHeader.tsx'
import DescriptionServices from './components/DescriptionServices.tsx'
import ProvidersInfo from './components/Providers.tsx'
import MobileApp from './components/MobileApp.tsx'
import Slider from './components/Slider.tsx'
import ManageArticles from './components/ManageArticle.tsx'
import Footer from './components/Footer.tsx'
import ManageCardServices from './components/ManageCardServices.tsx'
import {cardsData, commentsData, articlesData } from './data.tsx'

function App() {
  return (
    <>
      <Header />
      <SubHeader />
      <DescriptionServices />
      <ManageCardServices data={cardsData} />
      <ProvidersInfo />
      <MobileApp />
      <Slider data={commentsData} />
      <ManageArticles data={articlesData} />
      <Footer />
    </>
  )
}
export default App
