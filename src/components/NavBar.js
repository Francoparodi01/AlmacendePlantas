import React from 'react'
import {BsTreeFill} from 'react-icons/bs'
import Search from './Search'

const NavBar = () => {
  return (
    <div className='headBox'>
      <div className='headContainer'>
        <ul className='ulHeader'>
          <BsTreeFill className='logo'/>
          <a className='headerList' href="#" >Inicio</a>
          <a className='headerList' href="#" >Productos</a>
          <a className='headerList' href="#" >Quiénes somos</a>
          <Search/>
        </ul>
      </div>
    </div>
  )
}

export default NavBar 