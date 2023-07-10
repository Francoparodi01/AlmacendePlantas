import React from 'react'
import Slogan from './Slogan'
import NavInfo from './NavInfo'
import NavBar from './NavBar'
import Carrousel from './Carrousel'
import ContenedorGrids from './ContenedorGrids'
import { Route } from 'react-router-dom'

//componente principal de mi app


export const Home = () => {
  return (
    <>
    <Slogan/>
    <NavInfo/>
    <NavBar/>
    <Carrousel/>
    <ContenedorGrids/>
  </>
  )
}
