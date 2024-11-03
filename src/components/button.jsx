// Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, to, type = 'primary', disabled = false }) => {
  // Define la clase CSS en función del tipo y el estado del botón
  const className = `button ${type} ${disabled ? 'disabled' : ''}`;

  return (
    <Link to={to} className={className} aria-disabled={disabled}>
      {text}
    </Link>
  );
};

export default Button;