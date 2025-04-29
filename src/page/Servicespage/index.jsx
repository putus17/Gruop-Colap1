import React from 'react'
import Services from '../../component/Services'
import Welcome from '../../component/welcome'
import NavBar from '../../component/NavBar'
import { Footer } from 'antd/es/layout/layout'
const Servicespage = () => {
  return (
    <div>
        <Welcome/>
        <NavBar/>
        <Services/>
        <Footer/>

      
    </div>
  )
}

export default Servicespage
