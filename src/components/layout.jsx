import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import SolicitarPage from '../pages/SolicitarPage'
import OfrecerPage from '../pages/OfrecerPage'

import NavBar from '../components/nav_bar'
import Barra_horizontal from '../components/barra_horizontal'



const Layout = () => {
  return (
    <BrowserRouter>
      <Barra_horizontal />
      <div className='layout__page'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/solicitar' element={<SolicitarPage />} />
          <Route path='/ofrecer' element={<OfrecerPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Layout
