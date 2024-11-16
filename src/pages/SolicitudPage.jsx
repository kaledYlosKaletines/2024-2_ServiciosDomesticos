import React, { useState } from 'react';
import '../stylesheets/SolicitarPage/SolicitudPage.scss';
import Button from '../components/button';

// Importa las imágenes
import Kaled1 from '../assets/Kaled1.jpg';
import Kaled2 from '../assets/Kaled2.jpg';
import Kaled3 from '../assets/Kaled3.jpg';

export const SolicitudPage = () => {
  const [selectedImage, setSelectedImage] = useState(Kaled1);
  
  const images = [Kaled1, Kaled2, Kaled3];

  return (
    <div className="solicitud-page">
      <div className="content-wrapper">
        {/* Galería y detalles principales */}
        <div className="main-content">
          {/* Galería de imágenes */}
          <div className="gallery-section">
            <div className="main-image">
              <img src={selectedImage} alt="Imagen principal" />
            </div>
            <div className="thumbnail-list">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Información principal */}
          <div className="info-section">
            <div className="service-header">
              <h1>Servicios de Mantención del Hogar</h1>
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">(32 valoraciones)</span>
              </div>
            </div>

            <div className="price-section">
              <div className="price">$5.700</div>
              <div className="price-subtitle">por hora</div>
            </div>

            <div className="provider-info">
              <img src={Kaled1} alt="Kaled Hernández" className="provider-image" />
              <div className="provider-details">
                <h2>Kaled Hernández</h2>
                <div className="verification-badge">✓ Verificado</div>
              </div>
            </div>

            <div className="contact-buttons">
              <button className="contact-button primary">
                <span>📞</span> Llamar ahora
              </button>
              <button className="contact-button secondary">
                <span>📧</span> Enviar mensaje
              </button>
            </div>
          </div>
        </div>

        {/* Descripción detallada */}
        <div className="description-section">
          <h2>Descripción del Servicio</h2>
          <div className="description-content">
            <p>Mantenimiento integral de tu hogar y jardín con servicios profesionales de limpieza y cuidado básico.</p>
            
            <h3>Servicios incluidos:</h3>
            <ul>
              <li>Limpieza general del hogar</li>
              <li>Mantenimiento básico de jardines</li>
              <li>Reparaciones menores</li>
              <li>Organización de espacios</li>
            </ul>

            <h3>Experiencia:</h3>
            <p>Más de 5 años brindando servicios de calidad en el área de Valparaíso.</p>

            <div className="availability">
              <h3>Disponibilidad:</h3>
              <p>Lunes a Sábado: 8:00 AM - 6:00 PM</p>
            </div>

            <div className="service-area">
              <h3>Área de servicio:</h3>
              <p>Valparaíso y Viña del Mar</p>
            </div>
          </div>
        </div>

        {/* Botón de retorno */}
        <div className="back-button-container">
          <Button text="Atrás" to="/solicitar" type="primary" />
        </div>
      </div>
    </div>
  );
};

export default SolicitudPage;