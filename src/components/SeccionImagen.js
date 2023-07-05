import React from 'react'
import limonRedondo from '../assets/limon.png'

export const SeccionImagen = () => {
  return (
    <section className='imgCont'>
        <div className='divSeccion'>
          <div className="container-img">
          <div class="circle"></div>
            <p className='pieImgSeccion '>Macetas</p>
          </div>
            <div className="container-img">
            <div class="circle">
              <img src={limonRedondo}/>
            </div>
            <p className='pieImgSeccion'>Tierra</p>
            </div>
            
        </div>
    </section>
  )
}
