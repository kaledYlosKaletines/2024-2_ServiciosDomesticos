import React from 'react';
import usuarioImg from '../assets/usuario.png';
import busquedaImg from '../assets/busqueda.png';

const ServiceCard = ({ title, imageSrc, to }) => {
  return (
    <div className="service-card" onClick={() => window.location.href = to}>
      <div className="card-content">
        <img 
          src={imageSrc} 
          alt={title}
          className="card-image"
        />
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="main-content">
        <div className="header-content">
          <h1 className="main-title">¡Bienvenido al portal de Servicios Domésticos!</h1>
          <p className="main-description">
            En esta página podrás solicitar u ofrecer todo tipo de servicios domésticos en tu comunidad.
          </p>
          <p className="main-question">¿Qué deseas hacer?</p>
        </div>

        <div className="flex justify-center gap-8">
          <ServiceCard 
            title="Ofrecer Servicios"
            imageSrc={usuarioImg}
            to="/ofrecer"
          />
          <ServiceCard 
            title="Buscar Servicios"
            imageSrc={busquedaImg}
            to="/solicitar"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;