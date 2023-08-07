import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ItemCard from '../productos/ItemCard'

const GridsItemCard = () => {
  return (
    <div>
      <Container className='containerGrid'>
          <Col className='columna-card'><ItemCard/></Col>     
      </Container>
    </div>
  )
}

export default GridsItemCard