import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import  palta  from '../../assets/palta.png'
import limon from '../../assets/limones.png'
import naranja from '../../assets/naranja.png'
import jazmin from '../../assets/jazminCarrousel.jpg'


function Carrousel() {
  return (
    <div className='carrouselContainer'>
      <div className='carrouselInterno'> 
      <Carousel>
      <div className='contenedor-imgcarrousel'>
        <img src={palta} className='imgCarrousel' alt="Maceta colgante"/>
        <img src={limon} className='imgCarrousel' alt="Maceta colgante"/>
        <img src={naranja} className='imgCarrousel' alt="Maceta colgante"/>
      </div>
      <div>
        <img src={jazmin} id='imagenJazmin' alt="Otra maceta colgante" />
      </div>
      {/* Agrega más imágenes según tus necesidades */}
    </Carousel>
      </div>
    </div>
      );
    }

export default Carrousel;