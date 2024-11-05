// Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, to, type = 'primary', disabled = false, onClick }) => {
  // Define la clase CSS en función del tipo y el estado del botón
  const className = `button ${type} ${disabled ? 'disabled' : ''}`;

  // Función que maneja el clic (si se proporciona el onClick)
  const handleClick = (e) => {
    // Si hay un onClick definido, se ejecuta
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link to={to} className={className} aria-disabled={disabled} onClick={handleClick} >
      {text}
    </Link>
  );
};

export default Button;