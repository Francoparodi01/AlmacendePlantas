import {useNavigate} from 'react-router-dom';


const Item = ({data}) => {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
      navigate(`/prduct/${data.name}`)
    }
  
    return (
      <div className='card-container' onClick={handleNavigate}>
        <img src={data.img} width={150} alt="product"/>
        <h1 className='card-title'>{data.name}</h1>
      </div>
    )
  }
export default Item