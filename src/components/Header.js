import React from 'react'
import {BsTreeFill} from 'react-icons/bs'
const Header = () => {
  return (
    <div className='headBox'>
        <div className='headContainer'>
            <ul className='ulHeader'>
                <BsTreeFill className='logo'/>
                <a className='headerList' href="#" >Inicio</a>
                <a className='headerList' href="#" >Productos</a>
                <a className='headerList' href="#" >Quiénes somos</a>
            </ul>
        </div>
    </div>
  )
}

export default Header