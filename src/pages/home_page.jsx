import React from 'react'
import Button from '../components/button'

export const HomePage = () => {
  return (
    <>

      <div className='center-block'> 

        <p>¡Bienvenido al portal Servicios Domesticos!</p>
        <p>En esta página podras solicitar u ofrecer todo tipo de servicios domesticos en tu comunidad.</p>

        <p>¿Que deseas hacer?</p>
        
      </div>

      <div className='center-block'>

        <div>
          <Button text="Ofrecer Servicios" to="/ofrecer" type="asblockPrimary" />
        </div>

        <div >
          <Button text="Buscar Servicios" to="/solicitar" type="asblockPrimary" />
        </div>

      </div>
    </>



  )
}

export default HomePage
