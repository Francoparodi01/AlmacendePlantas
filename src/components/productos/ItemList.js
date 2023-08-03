import React from 'react';
import { data } from '../../mocks/mocks';
import Item from './Item';

const ItemList = () => {
  return (
    <ul className='ul-item-list'>
      {data.length ? (
        data.map(itemData => <Item key={itemData.id} data={itemData} />)
      ) : (
        <h2>Loading...</h2>
      )}
    </ul>
  );
};

export default ItemList;
