import React from 'react'
import macetaRedonda from '../assets/macetaRedonda.png'
import tierraRedonda from '../assets/tierra.png'
export const SeccionImagen = () => {
  return (
    <section className='imgCont'>
        <div className='divSeccion'>
          <div className=''>
            <img src={macetaRedonda} className='imgRedonda' alt='imagenRedonda'></img>
            <p className='pieImgSeccion '>Macetas</p>
          </div>
            <div>
            <img src={tierraRedonda} className='imgRedonda' alt='imagenRedonda'></img>
            <p className='pieImgSeccion'>Tierra</p>
            </div>
            
        </div>
    </section>
  )
}
