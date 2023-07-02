import React from 'react';
import {Carousel} from 'react-bootstrap';
import frutales from '../assets/bannerFrutal.png'
import cerco from '../assets/bannerCerco.png'

function Carrousel() {
  return (
    <div className='carrouselContainer'>
      <div className='carrouselInterno'> 
      <Carousel slide={true} interval={3000}>
      <Carousel.Item>
        <img className="d-block w-100" src={frutales} alt="Banner frutal"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cerco} alt="Banner cerco"/>
      </Carousel.Item>

    </Carousel>
      </div>
    </div>
      );
    }

export default Carrousel;