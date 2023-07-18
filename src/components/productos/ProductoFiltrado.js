import React from 'react';
import ContenedorHeader from '../contenedores/ContenedorHeader';

const ProductoFiltrado = ({datosFiltrados, item}) => {
console.log(datosFiltrados)
  return (
<>
<ContenedorHeader/>
<div className='item-container'>
            {datosFiltrados.map(item =>(
              <div className='card-container' key={item.id}>
                <img src={item.img} className='imagen-producto'></img>
              <h1>{item.name}</h1>
    </div>
  ))}
</div>
</>
  );
};

export default ProductoFiltrado;
