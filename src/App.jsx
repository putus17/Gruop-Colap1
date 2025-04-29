




import HomePage from './page/HomePage'


import Aboutpage from './page/Aboutpage/index.jsx'
import LoginPage from './page/LoginPage/index.jsx'
import SignUpPage from './page/SignUpPage/index.jsx'
import Servicespage from './page/Servicespage'
import ContactPage from './page/Contactpage'


 const App = () => {
  return (
    <div>
      <HomePage/>

      <LoginPage/>
<SignUpPage/>
      <Aboutpage />
      <Servicespage/>
      <ContactPage/>

      </div>
  )
}

export default App

