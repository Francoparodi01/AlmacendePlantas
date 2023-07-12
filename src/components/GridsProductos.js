import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ItemList from './ItemList'
import FiltradoProductos from './FiltradoProductos'
import Item from './Item'

const GridsProductos = () => {
  return (
    <div>
        <Container className='containerGrid'>
          <Row className='row-productos'>
            <Col className='columna-filtros'><FiltradoProductos/></Col>
            <Col><ItemList/></Col>
          </Row>
        </Container>
    </div>
  )
}

export default GridsProductos 