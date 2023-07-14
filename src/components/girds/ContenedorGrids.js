import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { SeccionImagen } from '../header/SeccionImagen'

function ContenedorGrids() {
  return (
    <div>
      <Container className='containerGrid'>
          <Col><SeccionImagen/></Col>
      </Container>
    </div>
  );
}

export default ContenedorGrids;