import React from 'react'
import Carrousel from '../header/Carrousel'
import GridHome from '../girds/GridHome'
import ContenedorHeader from './ContenedorHeader'

//componente principal de mi app


const Home = () => {
  return (
    <>
    <ContenedorHeader/>
    <Carrousel/>
    <GridHome/>
  </>
  )
}

export default Home;