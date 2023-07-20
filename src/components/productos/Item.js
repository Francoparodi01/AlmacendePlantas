import { Container, Row } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Item = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigateId = () => {
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
            onClick={handleNavigateId}
          />
          <Row className='itemlist-card-detail'>
            <h1 className='card-title' onClick={handleNavigateId}>{data.name}</h1>
            <p className='card-price'>${data.price}</p>
          </Row>
        </div>
      </li>
    </Container>
  );
};

export default Item;
