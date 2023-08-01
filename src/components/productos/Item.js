import { Container, Row } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Item = ({ data }) => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const handleNavigateId = () => {
    navigate(`/detail/${data.id}`);
=======
  const handleNavigateName = () => {
    navigate(`/detail/${data.name}`);
>>>>>>> master
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
<<<<<<< HEAD
            onClick={handleNavigateId}
          />
          <Row className='itemlist-card-detail'>
            <h1 className='card-title' onClick={handleNavigateId}>{data.name}</h1>
=======
            onClick={handleNavigateName}
          />
          <Row className='itemlist-card-detail'>
            <h1 className='card-title' onClick={handleNavigateName}>{data.name}</h1>
>>>>>>> master
            <p className='card-price'>${data.price}</p>
          </Row>
        </div>
      </li>
<<<<<<< HEAD
=======
      
>>>>>>> master
    </Container>
  );
};

export default Item;
