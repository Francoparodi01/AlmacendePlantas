import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { SeccionImagen } from '../header/SeccionImagen'

function GridHome() {
  return (
    <div>
      <Container className='containerGrid'>
          <Col><SeccionImagen/></Col>
      </Container>
    </div>
  );
}

export default GridHome;