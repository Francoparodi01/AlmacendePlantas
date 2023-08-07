import React, { useContext } from 'react'
import {BsTreeFill} from 'react-icons/bs'
import Search from './Search'
import DarkModeToggle from '../DarkModeToggle'
import {Link} from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../context/CartContext'
const NavBar = () => {

  const [cart, setcart] = useContext(CartContext)

//se podría hacer con for
//acc = acumulador 
//curr = current
  const qtty = cart.reduce((acc, curr) =>{
    return acc + curr.qtty
  }, 0);


  return (
      <div className='headBox'>
        <div className='headContainer'>
          <ul className='ulHeader'>
              <Link className='logo' to='/'>
                <BsTreeFill className='logo'/>
              </Link>
              <Link className='headerList' to='/'>Inicio</Link>
              <Link className='headerList' to='/productos'>Productos</Link>
              <Link className='headerList'>Quiénes somos</Link>
              <Search />
              <DarkModeToggle/>
              <Link className='logo' to='/cart'>
                <AiOutlineShoppingCart className='logo'/>
                :{qtty}
              </Link>
          </ul>
        </div>
      </div>
  )
}

export default NavBar 