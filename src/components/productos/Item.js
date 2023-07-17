import { Container, Row } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


const Item = ({data, showFiltrado}) => {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
      navigate(`/product/${data.name}`)
    }

    console.log(data)

    //muestro mis items en la pagina productos

    return (
        <Container id='contenedor-lista-productos' style={{ display: showFiltrado ? 'none' : 'block' }}>
      <li className='clase2'>
      <div className='card-container'>
        <img src={data.img} width={150} alt="product" className='imagen-producto' onClick={handleNavigate}/>
        <Row className='itemlist-card-detail'>
        <h1 className='card-title' onClick={handleNavigate} >{data.name} </h1>
        <p className='card-price'>${data.price}</p>
        </Row>  
      </div>
      </li>
        </Container>
    )
  }
export default Item