import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ItemList from '../productos/ItemList'
<<<<<<< HEAD
import FiltradoProductos from '../productos/FormProductos'
=======
import FormProductos from '../productos/FormProductos'
>>>>>>> master

const GridsProductos = () => {
  return (
    <div>
        <Container className='containerGrid'>
          <Row className='row-productos'>
<<<<<<< HEAD
            <Col className='columna-filtros'><FiltradoProductos/></Col>
=======
            <Col className='columna-filtros'><FormProductos/></Col>
>>>>>>> master
            <Col xs className='col-container-productos'><ItemList/></Col>
          </Row>
        </Container>
    </div>
  )
}

export default GridsProductos 