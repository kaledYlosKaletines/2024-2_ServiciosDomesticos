import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import SolicitarPage from '../pages/SolicitarPage'
import OfrecerPage from '../pages/OfrecerPage'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title'>Servicios domesticos</h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path='/solicitar' element={<SolicitarPage />} />
            <Route path='/ofrecer' element={<OfrecerPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
