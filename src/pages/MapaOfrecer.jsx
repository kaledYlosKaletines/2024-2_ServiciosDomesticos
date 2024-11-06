import React from 'react'
import Button from '../components/button'
import Map from '../assets/Mapa1.jpg'

export const MapaOfrecer = () => {
    return(
        <>
        <div className="pagina-ayuda">
        <div className="contenido-izquierda">
          <h1>¿Dónde te encuentras?</h1>
          <p>Selecciona tu área de residencia/trabajo para mejorar tus recomendaciones</p>
        </div>
  
        <div className="contenido-derecha">
          <img src={Map} alt="Mapa" className="imagen-derecha" />
        </div>
        </div>
        <div className='container button-gap'>


        <div className='left'>
        <Button text="Atrás" to="/" type="primary" />
        </div>

        <div className='right'>
          <Button text="Siguiente" to="/mapa" type="primary" />
        </div>

        </div>
        </>
        )
}

export default MapaOfrecer