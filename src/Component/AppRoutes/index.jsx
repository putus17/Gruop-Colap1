import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../../page/HomePage';
import Aboutpage from '../../page/Aboutpage';
import Servicespage from '../../page/Servicespage';
import Contactpage from '../../page/Contactpage';

import LoginPage from '../../page/LoginPage';
import SignUpPage from '../../page/SignUpPage';

const AppRoutes = () => {
  return (
    <>
   
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/services' element={<Servicespage />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />


      </Routes>
    </>
  )
}

export default AppRoutes
