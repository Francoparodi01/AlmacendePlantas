import React from 'react'
import ContenedorHeader from './ContenedorHeader'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();
    const handleNavigateProductList = () =>{
        navigate(`/productos`)
    }
console.log(navigate)

  return (
    <>
    <ContenedorHeader/>
    <h2>El producto no fue encontrado</h2>
    <button onClick={handleNavigateProductList}>Ver más productos</button>
    </>
  )
}

export default NotFound