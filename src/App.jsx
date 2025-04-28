



import React from 'react'
import Aboutpage from './page/Aboutpage/index.jsx'
import LoginPage from './page/LoginPage/index.jsx'
import SignUpPage from './page/SignUpPage/index.jsx'
import Servicespage from './page/Servicespage'

 const App = () => {
  return (
    <div>
      <LoginPage/>
<SignUpPage/>
      <Aboutpage />
      <Servicespage/>

      </div>
  )
}

export default App