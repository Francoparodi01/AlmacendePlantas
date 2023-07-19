import React from 'react';
import ContenedorHeader from '../contenedores/ContenedorHeader';
import data from '../../mocks/mocks';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

const ProductoFiltrado = ({item}) => {

  const { categoryId } = useParams();

  const datosFiltrados = data.filter((item) => item.category === categoryId);
  console.log(datosFiltrados)
  return (
<>
<ContenedorHeader/>
<div className='filter-container'>
<Container id='contenedor-lista-productos'>
      <div className='item-container'>
      <li className='clase2'>
        {datosFiltrados.map((item) => (
          <div className='card-container' key={item.id}>
          <img src={item.img} className='imagen-producto' width={150} alt={`Imagen ${item.name}`} />
          <Row className='itemlist-card-detail'>
            <h1 className='card-title'>{item.name} </h1>
            <p className='card-price'>${item.price}</p>
        </Row>  
          </div>
        ))}
    </li>
  </div>
    </Container>
</div>
</>
  );
};

export default ProductoFiltrado;
