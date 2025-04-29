import React from 'react'
import About from '../../component/About/index.jsx'
import { Footer, Header } from 'antd/es/layout/layout.js'
import NavBar from '../../component/NavBar/index.jsx'
import Welcome from '../../component/welcome/index.jsx'


const Aboutpage = () => {
  return (
    <div>
      <Welcome/>
     
      <NavBar />
      <About />
   <Footer />
    </div>
  )
}

export default Aboutpage
