import React from 'react'
import Carrousel from './header/Carrousel'
import ContenedorGrids from './ContenedorGrids'
import ContenedorHeader from './ContenedorHeader'

//componente principal de mi app


const Home = () => {
  return (
    <>
    <ContenedorHeader/>
    <Carrousel/>
    <ContenedorGrids/>
  </>
  )
}

export default Home;