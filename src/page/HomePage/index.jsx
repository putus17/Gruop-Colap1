import React from 'react'
import Welcome from '../../component/welcome'
import NavBar from '../../component/NavBar'
import Footer from '../../component/Footer/in dex'
import HighlightContainer from '../../component/container/HightLightContainer'
import LearningSection from '../../component/container/LearningSection'
import TrainingBenefits from '../../component/container/TraningBenifits'
import Head from '../../Component/Head'


const HomePage = () => {
  return (
    <div>

      <Welcome/>
      <NavBar/>
       <Head/>
      <HighlightContainer/>
      <LearningSection/>
      <TrainingBenefits/>
      <Footer/>
    </div>
  )
}

export default HomePage
