import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import data from '../../mocks/mocks';

const ProductoFiltrado = () => {
  const { categoryId } = useParams();
  const datosFiltrados = data.filter((item) => item.category === categoryId);

  return (
    <div className='filter-container'>
      <Container id='contenedor-lista-productos'>
        <Row>
          {datosFiltrados.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <div className='card-container'>
                <Link to={`/detail/${item.name}`}>
                  <img
                    src={item.img}
                    className='imagen-producto'
                    width={150}
                    alt={`Imagen ${item.name}`}
                  />
                </Link>
                <Row className='itemlist-card-detail'>
                  <Link to={`/detail/${item.name}`}>
                    <h1 className='card-title'>{item.name}</h1>
                  </Link>
                  <p className='card-price'>${item.price}</p>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductoFiltrado;
