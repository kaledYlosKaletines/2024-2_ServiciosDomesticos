import React from 'react'
import '../stylesheets/SolicitarPage/SolicitudPage.scss'
import Button from '../components/button'


export const SolicitudPage = () => {

  return(

    <>
    <h1>Buscar Ayuda</h1>
    <div className="search-section">
                <input type="text" placeholder="Nombre o Ubicación" className="search-input" />
                <select className="service-select">
                    <option>Elegir tipo de servicio</option>
                    <option>Servicios Domesticos</option>
                    <option>Jardineria</option>
                    <option>Otros . . .</option>
                </select>
                <button className="search-button">🔍</button>
    </div>
    {/* Tarjeta de resultado */}
    <div className="result-card">
        <div className="result-image">
          <p>IMAGEN</p>
          <div className="thumbnail">IMAGEN</div>
          <div className="thumbnail">IMAGEN</div>
          <div className="thumbnail">IMAGEN</div>
        </div>
        <div className="result-info">
          <h2>Kaled Hernández</h2>
          <p>Mantenimiento de tu hogar y jardín con trabajos de limpieza y cuidado básico. $5700 por hora.</p>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <span>📧</span> <a href="mailto:correo@example.com">Correo</a>
          </div>
          <div className="contact-item">
            <span>📞</span> <a href="tel:+123456789">Número de Teléfono</a>
          </div>
      </div>
      </div>
      
      
      
    </>
  
      
  
    ) 



}

export default SolicitudPage