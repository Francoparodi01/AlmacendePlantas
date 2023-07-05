import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { SeccionImagen } from './SeccionImagen';
import { useFadeInOnScroll } from './useFadeInOnScroll';
function ContenedorGrids() {
    const fadeInClass = useFadeInOnScroll();
  

  return (
    <div  className={`my-component ${fadeInClass}`}>
      <Container className='containerGrid'>
          <Col><SeccionImagen/></Col>
          <Col><div>hola como estas</div></Col>
      </Container>
    </div>
  );
}

export default ContenedorGrids;