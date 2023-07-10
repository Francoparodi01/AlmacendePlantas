import React from 'react'
import Slogan from './Slogan'
import NavInfo from './NavInfo'
import NavBar from './NavBar'
import Carrousel from './Carrousel'
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