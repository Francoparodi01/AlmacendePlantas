import { Container, Row } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


const Item = ({data}) => {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
      navigate(`/prduct/${data.name}`)
    }
  
    //muestro mis items en la pagina productos

    return (
        <Container id='contenedor-lista-productos'>
      <li className='clase2'>
      <div className='card-container' onClick={handleNavigate}>
        <img src={data.img} width={150} alt="product" className='imagen-producto'/>
        <Row className='itemlist-card-detail'>
        <h1 className='card-title'>{data.name}</h1>
        <p className='card-title'>${data.price}</p>
        </Row>  
      </div>
      </li>
        </Container>
    )
  }
export default Item