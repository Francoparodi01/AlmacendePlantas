import React from 'react'
import {BsTreeFill} from 'react-icons/bs'
import Search from './Search'
import DarkModeToggle from './DarkModeToggle'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import { Home } from './Home'


const NavBar = () => {
  return (
    <BrowserRouter>
      <div className='headBox'>
        <div className='headContainer'>
          <ul className='ulHeader'>
            <li>
              <BsTreeFill className='logo' as={Link} to="/" />
            </li>
            <li>
              <Link className='headerList' to="/">Inicio</Link>
            </li>
            <li>
              <Link className='headerList'>Productos</Link>
            </li>
            <li>
              <Link className='headerList'>Quiénes somos</Link>
            </li>
            <li>
              <Search />
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default NavBar 