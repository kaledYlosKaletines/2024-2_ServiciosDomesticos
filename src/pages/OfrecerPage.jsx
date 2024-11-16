import React, { useState } from 'react';
import Button from '../components/button';


export const OfrecerPage = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    serviceType: '',
    price: '',
    description: ''
  });
  const [canSubmit, setCanSubmit] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Verifica si los campos obligatorios están llenos
  React.useEffect(() => {
    const { name, serviceType, price } = formData;
    setCanSubmit(name.trim() !== '' && serviceType !== '' && price.trim() !== '');
  }, [formData]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    if (files.length + selectedImages.length > 3) {
      alert('Máximo 3 imágenes permitidas');
      return;
    }

    setSelectedImages([...selectedImages, ...files]);
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...newPreviews]);
  };

  const removeImage = (index) => {
    const newSelectedImages = selectedImages.filter((_, i) => i !== index);
    const newPreviewImages = previewImages.filter((_, i) => i !== index);
    setSelectedImages(newSelectedImages);
    setPreviewImages(newPreviewImages);
  };

  return (
    <div className="ofrecer-page">
      <div className="form-container">
        <h1>¡Ofrece tus servicios domésticos!</h1>
        <p className="subtitle">Completa el formulario para publicar tus servicios</p>
        
        <div className="required-fields-notice">
          * Campos obligatorios
        </div>

        <form className="service-form">
          {/* Sección de información personal */}
          <div className="form-section">
            <h2>Información Personal</h2>
            
            <div className="form-group">
              <label htmlFor="name">
                Nombre completo *
                <span className="field-required-hint">Obligatorio</span>
              </label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ej: Juan Pérez"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="service-type">
                Tipo de servicio *
                <span className="field-required-hint">Obligatorio</span>
              </label>
              <select 
                id="serviceType" 
                value={formData.serviceType}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecciona un servicio</option>
                <option value="domestico">Servicios domésticos</option>
                <option value="jardineria">Jardinería</option>
                <option value="otros">Otros</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="price">
                Valor por hora *
                <span className="field-required-hint">Obligatorio</span>
              </label>
              <div className="price-input">
                <span className="currency">$</span>
                <input 
                  type="text" 
                  id="price" 
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="5000"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  required 
                />
                <span className="per-hour">/hora</span>
              </div>
            </div>
          </div>

          {/* Sección de descripción */}
          <div className="form-section">
            <h2>
              Descripción del Servicio
              <span className="section-optional">(Opcional)</span>
            </h2>
            
            <div className="form-group">
              <label htmlFor="description">Describe tus servicios</label>
              <textarea 
                id="description" 
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                placeholder="Describe detalladamente los servicios que ofreces..."
              />
            </div>
          </div>

          {/* Sección de imágenes */}
          <div className="form-section">
            <h2>
              Imágenes de Referencia
              <span className="section-optional">(Opcional)</span>
            </h2>
            <p className="section-hint">Puedes agregar hasta 3 imágenes de tus trabajos anteriores</p>

            <div className="image-upload-container">
              <div className="image-previews">
                {previewImages.map((preview, index) => (
                  <div key={index} className="image-preview">
                    <img src={preview} alt={`Preview ${index + 1}`} />
                    <button 
                      type="button" 
                      className="remove-image" 
                      onClick={() => removeImage(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
                {previewImages.length < 3 && (
                  <label className="image-upload-button">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      style={{ display: 'none' }}
                    />
                    <div className="upload-icon">+</div>
                    <span>Agregar imagen</span>
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Botones de navegación */}
          <div className="form-navigation">
            <Button text="Atrás" to="/" type="primary" />
            <div className="next-button-container">
              {!canSubmit && (
                <span className="validation-message">
                  Completa todos los campos obligatorios para continuar
                </span>
              )}
              <Button 
                text="Siguiente" 
                to="/mapa" 
                type="primary"
                disabled={!canSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfrecerPage;