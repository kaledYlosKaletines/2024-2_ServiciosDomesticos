import React from 'react'
import '../stylesheets/SolicitarPage/SolicitarPage.scss'
import Button from '../components/button'
import { Link } from 'react-router-dom'

export const SolicitarPage = () => {

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

            <div className="content-section">
                <div className="sidebar">
                    <div className="categories">
                        <p><input type="checkbox" /> Servicios domésticos</p>
                        <p><input type="checkbox" /> Jardinería</p>
                        <p><input type="checkbox" /> Reparaciones del Hogar</p>
                        <p><input type="checkbox" /> Mudanza y Transporte</p>
                        <p><input type="checkbox" /> Otros...</p>
                    </div>
                    <div className="featured-service">
                        <div className="featured-image">Imagen Servicio Destacado</div>
                        <p>Título Servicio Destacado</p>
                    </div>
                </div>

                <div className="service-list">
                   
                    <div className="service-item">
                        <div className="service-image">IMAGEN</div>
                        <div className="service-description">
                            <h3>
                            <Link to='/solicitar/solicitud'>Kaled Hernandez </Link> </h3> {/*   remplazar el "to" por link de pagina nueva*/ }
                            <p>Se ofrece servicio de arreglos y limpieza del hogar, también trabajo basico de jardineria, 5000$ /hora.</p>
                        </div>
                    </div>
                    
                    {/* Otros servicios */}
                    {[2, 3].map((_, index) => (
                        <div key={index} className="service-item">
                            <div className="service-image">IMAGEN</div>
                            <div className="service-description">Descripción...</div>
                        </div>
                    ))}
                </div>

            </div>
            
            <Button text="Atrás" to="/" type="primary" />

   </>
    ) 
}

export default SolicitarPage