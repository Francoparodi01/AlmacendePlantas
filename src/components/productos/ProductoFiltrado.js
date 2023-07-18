import React from 'react';
import ContenedorHeader from '../contenedores/ContenedorHeader';
import data from '../../mocks/mocks';
import { useParams } from 'react-router-dom';

const ProductoFiltrado = () => {

  const { categoryId } = useParams();

  const datosFiltrados = data.filter((item) => item.category === categoryId);
  console.log(datosFiltrados)
  return (
<>
<ContenedorHeader/>
      <div className='item-container'>
        <div>
        {datosFiltrados.map((item) => (
          <div className='card-container' key={item.id}>
            <img src={item.img} className='imagen-producto' alt={`Imagen ${item.name}`} />
            <h1>{item.name}</h1>
          </div>
        ))}
    </div>
</div>
</>
  );
};

export default ProductoFiltrado;
