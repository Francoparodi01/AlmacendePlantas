import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ItemCard from '../productos/ItemCard'

const GridsItemCard = () => {
  return (
    <div>
      <Container className='containerGrid'>
        <Row className='row-productos'>
          <Col className='columna-filtros'><ItemCard/></Col>     
        </Row>
      </Container>
    </div>
  )
}

export default GridsItemCard