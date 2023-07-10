import React from 'react'
import limonRedondo from '../assets/limon.png'
import tierraRedonda from "../assets/tierra.png"
import macetaRedonda from '../assets/macetas.png'

export const SeccionImagen = () => {
  return (
    <section className='imgCont'>
        <div className='divSeccion'>
          <div className="container-img">
          <div class="circle">
            <img src={macetaRedonda} className='macetaRedonda'/>
          </div>
            <p className='pieImgSeccion '>Macetas</p>
          </div>
            <div className="container-img">
            <div class="circle" id='circulo-tierra'>
              <img src={tierraRedonda} className='tierraRedonda'/>
            </div>
            <p className='pieImgSeccion'>Tierra</p>
            </div>
            <div className="container-img">
            <div class="circle" id='circulo-limon'>
              <img src={limonRedondo} className='limonRedondo'/>
            </div>
            <p className='pieImgSeccion'>Frutales</p>
            </div>
            
        </div>
    </section>
  )
}
