import React from 'react'
import FormProductos from '../productos/FormProductos'
import ProductoFiltrado from '../productos/ProductoFiltrado'
import { Col, Container, Row } from 'react-bootstrap'

const GridsProductosFiltrados = () => {
  return (
    <Container className='containerGrid'>
      <Row className='row-productos'>
        <Col className='columna-filtros'><FormProductos/></Col>
        <Col xs className='col-container-productos'><ProductoFiltrado/></Col>
      </Row>
    </Container>
  )
}

export default GridsProductosFiltrados