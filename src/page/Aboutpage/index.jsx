import React from 'react'
import About from '../../Component/About'
import Footer from '../../Component/Footer'
import NavBar from '../../component/NavBar'
import Welcome from '../../component/welcome'

const AboutPage = () => {
  return (
    <div>
       <Welcome/>
      <NavBar/>
      <About/>
      <Footer/>
    </div>
  )
}

export default AboutPage
