
import Services from './Component/Services'



import React from 'react'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import About from './component/About/index.jsx'

const App = () => {
  return (
    <div>
          <Services />
      <LoginPage/>
      <SignUpPage/>
          <About />
     
    </div>
  )
}

export default App

