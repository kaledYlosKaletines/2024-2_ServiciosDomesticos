import React from 'react'

export const OfrecerPage = () => {

  return(

  <>
    <p className = 'titulos' > Aca podras ofrecer tus servicios domesticos</p>
    
    <div className='Formulario'>

    <form>
      <label>Nombre: <input type="text" name="name" /> </label>
      
      <label>
      <hr />

      Seleccione tipo de servicio:

      <select>
        <option value='domestico'>Servicios domesticos</option>  
        <option value='jardineria'>Jardineria</option>
        <option value='otros'>Otros</option>    
        
      </select>    
      <hr />

      </label>
      
      <label>Descripcion: 

      <textarea name="descripcion" rows={4} cols={40} />
      </label>


    </form>

    
    <button className='Siguiente'> Siguiente </button>


    </div>

  
    
  </>

    

  ) 

  


}

export default OfrecerPage