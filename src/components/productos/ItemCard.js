import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import NotFound from '../contenedores/NotFound';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import data from '../../mocks/mocks';

const ItemCard = () => {
  const { productName } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useContext(CartContext);

  // Buscar el producto por nombre en los datos
  const productoSeleccionado = data.find((item) => item.name === productName);

  if (!productoSeleccionado) {
    // Producto no encontrado, muestra NotFound o redirige a una página de error.
    return <NotFound />;
  }

  const addToCart = () => {
    // Verificar si el producto ya está en el carrito
    const itemInCart = cart.find((item) => item.id === productoSeleccionado.id);

    if (itemInCart) {
      // El producto ya está en el carrito, aumentar la cantidad
      setCart((cart) =>
        cart.map((item) =>
          item.id === productoSeleccionado.id
            ? { ...item, qtty: item.qtty + 1 }
            : item
        )
      );
    } else {
      // El producto no está en el carrito, agregarlo
      setCart((cart) => [...cart, { id: productoSeleccionado.id, qtty: 1 }]);
    }
  };

  const removeFromCart = () => {
    // Encontrar el producto en el carrito
    const itemInCart = cart.find((item) => item.id === productoSeleccionado.id);

    if (itemInCart) {
      if (itemInCart.qtty === 1) {
        // Si la cantidad es 1, eliminar el producto del carrito
        setCart((cart) => cart.filter((item) => item.id !== productoSeleccionado.id));
      } else {
        // Si la cantidad es mayor que 1, reducir la cantidad
        setCart((cart) =>
          cart.map((item) =>
            item.id === productoSeleccionado.id
              ? { ...item, qtty: item.qtty - 1 }
              : item
          )
        );
      }
    }
  };

  const quantityInCart = cart.find((item) => item.id === productoSeleccionado.id)?.qtty || 0;

  return (
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
            {quantityInCart === 0 ? (
              <Button onClick={addToCart}>
                <IoIosAddCircleOutline />
                Agregar al carrito
              </Button>
            ) : (
              <>
                <Button onClick={addToCart}>
                  <IoIosAddCircleOutline />
                  Agregar más
                </Button>
                <Button onClick={removeFromCart}>-</Button>
                <p>Cantidad en el carrito: {quantityInCart}</p>
              </>
            )}
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default ItemCard;
