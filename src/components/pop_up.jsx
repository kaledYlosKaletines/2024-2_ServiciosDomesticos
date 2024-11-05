// src/components/Popup.jsx
import React from 'react';
import Button from './button.jsx';

const Popup = ({ onClose }) => {
  return (
    <div style={popupStyle}>
      <div style={popupContentStyle}>
        <p>¡El anuncio se ha publicado correctamente!</p>
        <div className='container'><Button text="Ver Anuncio" to="/solicitar/solicitud" type="tercero" /></div>
        
      </div>
    </div>
  );
};
// Estilos del popup
const popupStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const popupContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
};

export default Popup;