import React from 'react'
import ShoppingCart from '../cart/ShoppingCart'
import { Col, Row } from 'react-bootstrap'

const GrudCart = () => {
  return (
    <>
    <Container className='containerGrid'>
      <Col className='columna-filtros'><ShoppingCart/></Col>
    </Container>
    </>
  )
}

export default GrudCart