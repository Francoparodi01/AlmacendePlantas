import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
const ShoppingCart = () => {

    const [cart, setcart] = useContext(CartContext)
    const qtty = cart.reduce((acc, curr) =>{
        return acc + curr.qtty
    }, 0);
    
  return (
    <>
    </>
  )
}

export default ShoppingCart