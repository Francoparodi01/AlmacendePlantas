import React from 'react'
import {BsTreeFill} from 'react-icons/bs'
import Search from './Search'
import DarkModeToggle from './DarkModeToggle'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'


const NavBar = () => {
  return (
      <div className='headBox'>
        <div className='headContainer'>
          <ul className='ulHeader'>
              <BsTreeFill className='logo'/>
              <Link className='headerList' to='/'>Inicio</Link>
              <Link className='headerList' to="/productos">Productos</Link>
              <Link className='headerList'>Quiénes somos</Link>
              <Search />
              <DarkModeToggle/>
          </ul>
        </div>
      </div>
  )
}

export default NavBar 