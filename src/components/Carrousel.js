import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import naranjo from '../assets/naranjo.jpg'

const Carrousel = () => {
  return (
    <div className='carrouselContainer'>
      <div className='carrousel'>
        <Carousel autoPlay infiniteLoop useKeyboardArrows dynamicHeight>
            <div className='carrousel'>
                <img src={naranjo} alt="cat1"/>                 
            </div>
            <div>
                <img src={naranjo} alt="" /> 
            </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Carrousel