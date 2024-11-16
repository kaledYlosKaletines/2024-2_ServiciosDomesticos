import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import SolicitarPage from '../pages/SolicitarPage'
import OfrecerPage from '../pages/OfrecerPage'
import Mapa from '../pages/MapaOfrecer'

import Barra_horizontal from '../components/barra_horizontal'
import SolicitudPage from '../pages/SolicitudPage'


const Layout = () => {
  return (
    <BrowserRouter>
      <Barra_horizontal />
      <div className='layout__page'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/solicitar' element={<SolicitarPage />} />
          <Route path='/ofrecer' element={<OfrecerPage />} />
          <Route path='/mapa' element = {<Mapa />} />
          <Route path='/solicitar/solicitud/1' element={<SolicitudPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Layout
