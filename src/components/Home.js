import React from 'react'
import Carrousel from './header/Carrousel'
import ContenedorGrids from './contenedores/ContenedorGrids'
import ContenedorHeader from './contenedores/ContenedorHeader'

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