import React from 'react'
import Contact from '../../component/contact'
import ContactUs from '../../component/ContactUs'
import ContactForm from '../../component/contact'
import Welcome from '../../component/welcome'
import NavBar from '../../component/NavBar'
import Footer from '../../Component/Footer'


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
