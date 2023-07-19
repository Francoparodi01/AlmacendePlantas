import { Container, Row } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Item = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${data.id}`);
  };

  return (
    <Container id='contenedor-lista-productos'>
      <li className='clase2'>
        <div className='card-container'>
          <img
            src={data.img}
            width={150}
            alt="product"
            className='imagen-producto'
            onClick={handleNavigate}
          />
          <Row className='itemlist-card-detail'>
            <h1 className='card-title' onClick={handleNavigate}>{data.name}</h1>
            <p className='card-price'>${data.price}</p>
          </Row>
        </div>
      </li>
    </Container>
  );
};

export default Item;
