import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ItemList from '../productos/ItemList'
import FormProductos from '../productos/FormProductos'

const GridsProductos = () => {
  return (
    <div>
        <Container className='containerGrid'>
          <Row className='row-productos'>
            <Col className='columna-filtros'><FormProductos/></Col>
            <Col xs className='col-container-productos'><ItemList/></Col>
          </Row>
        </Container>
    </div>
  )
}

export default GridsProductos 