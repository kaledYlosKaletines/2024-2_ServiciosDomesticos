import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Circle, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


// Corrige el ícono del marcador
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Componente para el modal de publicación
const PublicacionModal = ({ isOpen, onClose, ubicacion, radioCobertura }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">¡Publicación Exitosa!</h2>
        
        <div className="modal-info">
          <p><span className="modal-info-label">Nombre: </span>
          <span className="modal-info-value">Kaled Hernandez</span></p>
        </div>
        
        <div className="modal-info">
          <p><span className="modal-info-label">Tipo de Servicio: </span>
          <span className="modal-info-value">Servicio Doméstico</span></p>
        </div>
        
        <div className="modal-info">
          <p><span className="modal-info-label">Descripción: </span>
          <span className="modal-info-value">Se ofrece servicio de arreglos y limpieza del hogar, también trabajo básico de jardinería 5000$ /hora.</span></p>
        </div>
        
        <div className="modal-info">
          <p><span className="modal-info-label">Ubicación: </span>
          <span className="modal-info-value">{ubicacion}</span></p>
        </div>

        <div className="modal-info">
          <p><span className="modal-info-label">Radio de cobertura: </span>
          <span className="modal-info-value">{radioCobertura.toFixed(1)} km</span></p>
        </div>

        <button className="modal-close" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

// Componente para manejar eventos del mapa
function MapEvents({ onMapClick }) {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng);
    },
  });
  return null;
}

// Componente para actualizar la vista del mapa
function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, 13);
  return null;
}

const MapaOfrecer = () => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [center, setCenter] = useState({ lat: -33.047238, lng: -71.612688 }); // Valparaíso
  const [radius, setRadius] = useState(1000);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');

  const handleMapClick = (latlng) => {
    setMarkerPosition(latlng);
    setCenter(latlng);
    getAddressFromCoordinates(latlng.lat, latlng.lng);
  };

  const handleRadiusChange = (e) => {
    setRadius(Number(e.target.value) * 1000);
  };

  const getAddressFromCoordinates = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      setSelectedAddress(data.display_name);
      return data.display_name;
    } catch (err) {
      setSelectedAddress('Ubicación no disponible');
      return 'Ubicación no disponible';
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}, Valparaíso, Chile`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        const newPosition = { lat: parseFloat(lat), lng: parseFloat(lon) };
        setMarkerPosition(newPosition);
        setCenter(newPosition);
        setSelectedAddress(data[0].display_name);
      } else {
        setError('No se encontró la ubicación');
      }
    } catch (err) {
      setError('Error al buscar la ubicación');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextClick = () => {
    if (markerPosition) {
      setShowModal(true);
    }
  };

  return (
    <div className="map-container">
      {/* Panel de instrucciones */}
      <div className="instructions-panel">
        <h1 className="instructions-title">
          ¿Dónde quieres prestar tus servicios?
        </h1>
        <p className="instructions-text">
          Selecciona tu área de residencia/trabajo para mejorar tus recomendaciones
        </p>
        <div className="instructions-box">
          <h2 className="instructions-subtitle">Instrucciones:</h2>
          <ul className="instructions-list">
            <li>Busca una ubicación o haz clic en el mapa para marcar tu ubicación</li>
            <li>Ajusta el radio de cobertura con el control deslizante</li>
            <li>Puedes cambiar la ubicación en cualquier momento</li>
          </ul>
        </div>
      </div>

      {/* Buscador */}
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar ubicación en Valparaíso..."
            className="search-input"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="search-button"
          >
            {isLoading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>

      {/* Control de radio */}
      <div className="radius-control">
        <label className="radius-label">
          Radio de cobertura: {(radius / 1000).toFixed(1)} km
        </label>
        <input
          type="range"
          min="1"
          max="10"
          step="0.5"
          value={radius / 1000}
          onChange={handleRadiusChange}
          className="radius-input"
        />
      </div>

      {/* Contenedor del mapa */}
      <div className="map-wrapper">
        <MapContainer
          center={center}
          zoom={13}
          className="map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapEvents onMapClick={handleMapClick} />
          <ChangeView center={center} />
          {markerPosition && (
            <>
              <Marker position={markerPosition} />
              <Circle
                center={markerPosition}
                radius={radius}
                pathOptions={{
                  color: '#25D366',
                  fillColor: '#25D366',
                  fillOpacity: 0.2
                }}
              />
            </>
          )}
        </MapContainer>
      </div>

      {/* Mensaje de estado */}
      <div className="status-message">
        {markerPosition ? (
          <p className="success-message">
            ✓ Ubicación seleccionada correctamente - Radio de cobertura: {(radius / 1000).toFixed(1)} km
          </p>
        ) : (
          <p className="pending-message">
            Busca una ubicación o haz clic en el mapa para seleccionar tu ubicación
          </p>
        )}
      </div>

      {/* Botones de navegación */}
      <div className="nav-buttons">
        <button 
          className="nav-button back-button"
          onClick={() => window.history.back()}
        >
          Atrás
        </button>
        <button 
          className="nav-button next-button"
          onClick={handleNextClick}
          disabled={!markerPosition}
        >
          Siguiente
        </button>
      </div>

      {/* Modal de publicación */}
      <PublicacionModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        ubicacion={selectedAddress}
        radioCobertura={radius / 1000}
      />
    </div>
  );
};

export default MapaOfrecer;