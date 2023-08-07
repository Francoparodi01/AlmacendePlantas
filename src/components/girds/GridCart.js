import React from 'react'
import ShoppingCart from '../cart/ShoppingCart'
import { Col, Container } from 'react-bootstrap'

const GridCard = () => {
  return (
    <>
    <Container className='containerGrid'>
      <Col className='columna-filtros'><ShoppingCart/></Col>
    </Container>
    </>
  )
}

export default GridCard