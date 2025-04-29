import React from 'react'
import Contact from '../../component/contact/index.jsx'
import ContactUs from '../../component/ContactUs/index.jsx'
import ContactForm from '../../component/contact/index.jsx'
import Welcome from '../../component/welcome/index.jsx'
import NavBar from '../../component/NavBar/index.jsx'
import { Footer } from 'antd/es/layout/layout.js'

const Contactpage = () => {
  return (
    <div className="contact-container">
      <Welcome/>
      <NavBar/>
        <ContactUs />
        <ContactForm/>
        <Footer/>
      
    </div>
  )
}

export default Contactpage
