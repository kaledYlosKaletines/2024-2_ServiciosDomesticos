import React from 'react'
import Button from '../components/button'

export const OfrecerPage = () => {

  return(

  <>
    <p className = 'titulos' > ¡Acá podras ofrecer tus servicios domesticos!</p>
    
    <div className='Formulario'>



    <form>

      <div className='container'>
        <label>Nombre: <input type="text" name="name" /> </label>
      </div>

      <div className='container'>
        <label>
          

        Seleccione tipo de servicio:

        <select>
          <option value='domestico'>Servicios domesticos</option>  
          <option value='jardineria'>Jardineria</option>
          <option value='otros'>Otros</option>    
          
        </select>    

        </label>
        </div>

      <div className='container'>

        <label>Descripcion: 

        <textarea name="descripcion" rows={4} cols={40} />
        </label>

      </div>


      </form>

      

    <div className='container button-gap'>


        <div className='left'>
          <Button text="Atrás" to="/" type="primary" />
        </div>

        <div className='right'>
          <Button text="Siguiente" to="/solicitar" type="primary" />
        </div>


        
    </div>

    </div>

  
    
  </>

    

  ) 

  


}

export default OfrecerPage