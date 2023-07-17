import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ItemList from '../productos/ItemList'
import FiltradoProductos from '../productos/FiltradoProductos'
import ProductoFiltrado from '../productos/ProductoFiltrado'

const GridsProductos = () => {
  return (
    <div>
        <Container className='containerGrid'>
          <Row className='row-productos'>
            <Col className='columna-filtros'><FiltradoProductos/></Col>
            <Col xs className='col-container-productos'><ItemList/></Col>
          </Row>
        </Container>
    </div>
  )
}

export default GridsProductos 