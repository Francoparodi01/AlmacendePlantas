import React from 'react';
import ContenedorHeader from '../contenedores/ContenedorHeader';
import data from '../../mocks/mocks';
<<<<<<< HEAD
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

const ProductoFiltrado = ({item}) => {

  const { categoryId } = useParams();

  const datosFiltrados = data.filter((item) => item.category === categoryId);
  console.log(datosFiltrados)
  return (
<>
<ContenedorHeader/>
=======
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import FormProductos from './FormProductos';

const ProductoFiltrado = () => {
  
  const {categoryId} = useParams();
  const datosFiltrados = data.filter((item) => item.category === categoryId);
  console.log(datosFiltrados)

  const navigate = useNavigate();
  const handleNavigateName = () => {
    navigate(`/detail/:productName`);
  };


  return (
<>
>>>>>>> master
<div className='filter-container'>
<Container id='contenedor-lista-productos'>
      <div className='item-container'>
      <li className='clase2'>
        {datosFiltrados.map((item) => (
          <div className='card-container' key={item.id}>
<<<<<<< HEAD
          <img src={item.img} className='imagen-producto' width={150} alt={`Imagen ${item.name}`} />
          <Row className='itemlist-card-detail'>
            <h1 className='card-title'>{item.name} </h1>
=======
          <img src={item.img} className='imagen-producto' width={150} alt={`Imagen ${item.name}`}  onClick={handleNavigateName}/>
          <Row className='itemlist-card-detail'>
            <h1 className='card-title'  onClick={handleNavigateName}>{item.name} </h1>
>>>>>>> master
            <p className='card-price'>${item.price}</p>
        </Row>  
          </div>
        ))}
    </li>
  </div>
    </Container>
<<<<<<< HEAD
</div>
=======
  </div>
>>>>>>> master
</>
  );
};

export default ProductoFiltrado;
