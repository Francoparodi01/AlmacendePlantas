import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import ContenedorHeader from '../contenedores/ContenedorHeader';
import data from '../../mocks/mocks';
import {useNavigate, useParams } from 'react-router-dom';
import NotFound from '../contenedores/NotFound';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { get } from 'jquery';

const ItemCard = (id, qtty ) => {
  const { productName } = useParams();
  const navigatecart = useNavigate();
  const [cart, setCart] = useContext(CartContext)

  // Buscar el elemento específico según el 'name' en data
  const productoSeleccionado = data.find((item) => item.name === productName);
  console.log(productoSeleccionado);
  
  if (!productoSeleccionado) {
    // Si el producto no se encuentra, puedes mostrar un mensaje o redireccionar a una página de error.
    return <NotFound />;
  }

  const handleNavigateCart = () => {
    navigatecart(`/cart`)
  }


  const addToCart = () =>{
    setCart((itemListado) =>{
      const itemHallado = itemListado.find((item) => item.id === id);
      if(itemHallado){
        return itemListado.map((item) =>{
          if(item.id === id){
            return {...item, qtty: item.qtty +1}
          }else{
            return item
          }
        });
      }else{
        return [...itemListado, {id, qtty:1}]
      }
    });
  };

  const removeItem = (id) => {
    setCart((itemListado) => {
      if (itemListado.find((item) => item.id === id)?.qtty === 1) {
        return itemListado.filter((item) => item.id !== id);
      } else {
        return itemListado.map((item) => {
          if (item.id === id) {
            return { ...item, qtty: item.qtty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQttyById = (id) =>{
    return cart.find((item) => item.id === id)?.qtty || 0;
  };

  const qtttyPorItem = getQttyById(id);




  return (
    <>
      <Container id='contenedor-card-productos'>
          <div className='card-container'>
            <img
              src={productoSeleccionado.img}
              width={150}
              alt={`Imagen ${productoSeleccionado.name}`}
              className='imagen-producto'
            />
            <Row className='itemlist-card-detail'>
              <div className='contenedor-card-text'>
                <h1 className='card-title'>{productoSeleccionado.name}</h1> 
                <p className='card-price'>${productoSeleccionado.price}</p>
                { 
                  qtttyPorItem ===0 ? (
                    <button className='' onClick={() => addToCart()}>
                      <IoIosAddCircleOutline/>
                      Agregar al carrito
                    </button>
                  ) : (
                    <button onClick={() => addToCart()}>
                      <IoIosAddCircleOutline/>
                      Agregar más
                    </button>
                  )
                }
                {qtttyPorItem >0 &&
                (
                  <button onClick={() => removeItem(id)}>-</button>
                  )
                }
                {qtttyPorItem > 0  && (
                  <p>
                    Cantidad en el carrito: {qtttyPorItem}
                  </p>
                )}
              </div>
            </Row>
          </div>  
      </Container>
    </>
  );
};

export default ItemCard;
