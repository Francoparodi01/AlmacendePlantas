import React from 'react'
import { Row, Container } from 'react-bootstrap'
import ContenedorHeader from '../contenedores/ContenedorHeader'
import data from '../../mocks/mocks'
<<<<<<< HEAD
import { useParams } from 'react-router-dom'


const ItemCard = () => {
    const { productId } = useParams();

    // Buscar el elemento específico según el 'id' en el arreglo 'data'
    const productoSeleccionado = data.find((item) => item.id === productId);
  console.log(productoSeleccionado)
    if (!productoSeleccionado) {
      // Si el producto no se encuentra, puedes mostrar un mensaje o redireccionar a una página de error.
      return <p>Producto no encontrado.</p>;
=======
import { useNavigate, useParams } from 'react-router-dom'
import NotFound from '../contenedores/NotFound'


const ItemCard = () => {
    const { productName } = useParams();


    // Buscar el elemento específico según el 'name' en data
    const productoSeleccionado = data.find((item) => item.name === productName);
  console.log(productoSeleccionado)
    if (!productoSeleccionado) {
      // Si el producto no se encuentra, puedes mostrar un mensaje o redireccionar a una página de error.
      return <NotFound/>;
>>>>>>> master
    }
  
    return (
      <>
        <ContenedorHeader />
  
        <Container id='contenedor-lista-productos'>
          <li className='clase2'>
            <div className='card-container'>
              <img
                src={productoSeleccionado.img}
                width={150}
                alt={`Imagen ${productoSeleccionado.name}`}
                className='imagen-producto'
              />
              <Row className='itemlist-card-detail'>
                <h1 className='card-title'>{productoSeleccionado.name}</h1>
                <p className='card-price'>${productoSeleccionado.price}</p>
              </Row>
            </div>
          </li>
        </Container>
      </>
    );
  };
export default ItemCard