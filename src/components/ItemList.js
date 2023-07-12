import React from 'react'
import {data} from '../mocks/mocks'
import Item from './Item'

const ItemList = () => {
  return (
      // Busco items de mock
    <div className='item-container'>
      {data.length ? data.map(data => {
              return <Item key={data.id} data={data}/>
          })
          : 
          <h2>Loading...</h2>
        }
        </div>
      )
    }

export default ItemList


