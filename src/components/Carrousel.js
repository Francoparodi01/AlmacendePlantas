import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import frutales from '../assets/bannerFrutal.png'
import cerco from '../assets/bannerCerco.png'

function Carrousel() {
  return (
    <div className='carrouselContainer'>
      <div className='carrouselInterno'> 
      <Carousel interval={8000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={frutales}
          alt="Banner frutal"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cerco}
          alt="Banner cerco"
        />
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
      );
    }

export default Carrousel;