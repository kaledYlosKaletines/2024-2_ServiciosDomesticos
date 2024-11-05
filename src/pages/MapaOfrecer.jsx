import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from '../components/pop_up.jsx';
import Button from '../components/button'
import Map from '../assets/Mapa1.jpg'

export const MapaOfrecer = () => {

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/'); // Redirige a la página principal
  };

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
          <Button text="Siguiente" to="/mapa" type="primary" onClick={handleButtonClick}/>
          {showPopup && <Popup onClose={handleClosePopup} />}
        </div>
        </div>
        </>
        )
}

export default MapaOfrecer