import React from 'react';
import '../stylesheets/SolicitarPage/SolicitarPage.scss';
import Button from '../components/button';
import { Link } from 'react-router-dom';
import userImage from '../assets/usuario.png'; // Asegúrate de tener esta imagen

export const SolicitarPage = () => {
    const servicios = [
        {
            id: 1,
            nombre: "Kaled Hernandez",
            imagen: userImage,
            descripcion: "Se ofrece servicio de arreglos y limpieza del hogar, también trabajo básico de jardinería",
            precio: "5.000/hora",
            categoria: "Servicios Domésticos",
            rating: 4.5
        },
        {
            id: 2,
            nombre: "María González",
            imagen: userImage,
            descripcion: "Jardinería profesional, mantenimiento de áreas verdes y diseño de jardines",
            precio: "7.000/hora",
            categoria: "Jardinería",
            rating: 4.8
        },
        {
            id: 3,
            nombre: "Juan Pérez",
            imagen: userImage,
            descripcion: "Reparaciones generales del hogar, gasfitería y electricidad básica",
            precio: "6.500/hora",
            categoria: "Reparaciones",
            rating: 4.3
        }
    ];

    return (
        <div className="solicitar-page">
            {/* Header de búsqueda */}
            <div className="search-header">
                <h1>Buscar Servicios</h1>
                <div className="search-tools">
                    <input 
                        type="text" 
                        placeholder="Buscar por nombre o ubicación" 
                        className="search-input" 
                    />
                    <select className="service-select">
                        <option value="">Todos los servicios</option>
                        <option value="domesticos">Servicios Domésticos</option>
                        <option value="jardineria">Jardinería</option>
                        <option value="reparaciones">Reparaciones</option>
                        <option value="otros">Otros</option>
                    </select>
                    <button className="search-button">
                        <span className="search-icon">🔍</span>
                        Buscar
                    </button>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="main-content">
                {/* Filtros laterales */}
                <aside className="filters-sidebar">
                    <div className="filter-section">
                        <h3>Categorías</h3>
                        <div className="filter-options">
                            {['Servicios Domésticos', 'Jardinería', 'Reparaciones', 'Mudanzas', 'Otros'].map((categoria) => (
                                <label key={categoria} className="filter-option">
                                    <input type="checkbox" />
                                    <span>{categoria}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="filter-section">
                        <h3>Rango de Precio</h3>
                        <div className="price-range">
                            <input type="range" min="0" max="20000" step="1000" />
                            <div className="price-labels">
                                <span>$0</span>
                                <span>$20.000</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Grid de servicios */}
                <div className="services-grid">
                    {servicios.map((servicio) => (
                        <Link to={`/solicitar/solicitud/${servicio.id}`} key={servicio.id} className="service-card">
                            <div className="card-image">
                                <img src={servicio.imagen} alt={servicio.nombre} />
                                <span className="price-tag">${servicio.precio}</span>
                            </div>
                            <div className="card-content">
                                <h3>{servicio.nombre}</h3>
                                <span className="category-tag">{servicio.categoria}</span>
                                <p>{servicio.descripcion}</p>
                                <div className="card-footer">
                                    <div className="rating">
                                        {'★'.repeat(Math.floor(servicio.rating))}
                                        {'☆'.repeat(5 - Math.floor(servicio.rating))}
                                        <span>{servicio.rating}</span>
                                    </div>
                                    <button className="contact-button">Contactar</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Botón de retorno */}
            <div className="back-button-container">
                <Button text="Atrás" to="/" type="primary" />
            </div>
        </div>
    );
};

export default SolicitarPage;