import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import ContenedorHeader from '../contenedores/ContenedorHeader';
const ShoppingCart = () => {

    const [cart, setcart] = useContext(CartContext)
    const qtty = cart.reduce((acc, curr) =>{
        return acc + curr.qtty
    }, 0);
    
  return (
    <>
    <div>
        <p>
            hola q tal
        </p>
    </div>
    </>
  )
}

export default ShoppingCart