import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SeccionImagen } from './SeccionImagen';

function ContenedorGrids() {
  return (
      <Container className='containerGrid'>
          <Col><SeccionImagen/></Col>

      </Container>
  );
}

export default ContenedorGrids;