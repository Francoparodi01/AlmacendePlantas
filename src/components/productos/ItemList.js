import React from 'react'
import {data} from '../../mocks/mocks'
import Item from './Item'
import ProductoFiltrado from './ProductoFiltrado'

const ItemList = () => {
  return (
      // Busco items de mock
      <ul className='ul-item-list'>
    <div className='item-container'>
      {data.length ? data.map(data => {
        return <Item key={data.id} data={data}/>
      })
      : 
      <h2>Loading...</h2>
    }
        </div>
    </ul>
      )
    }

export default ItemList


