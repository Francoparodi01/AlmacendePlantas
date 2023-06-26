import React from 'react'
import {BsTreeFill} from 'react-icons/bs'
const Header = () => {
  return (
    <div className='headBox'>
        <div className='headContainer'>
            <ul className='ulHeader'>
                <BsTreeFill className='logo'/>
                <li className='headerList'>Inicio</li>
                <li className='headerList'>Productos</li>
                <li className='headerList'>Quiénes somos</li>
            </ul>
        </div>
    </div>
  )
}

export default Header