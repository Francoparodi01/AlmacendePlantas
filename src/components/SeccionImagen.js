import React from 'react'
import macetaRedonda from '../assets/macetaRedonda.png'
import tierraRedonda from '../assets/tierra.png'
export const SeccionImagen = () => {
  return (
    <section className='imgCont'>
        <div>
            <img src={macetaRedonda} className='imgRedonda'></img>
            <img src={tierraRedonda} className='imgRedonda'></img>
        </div>
    </section>
  )
}
