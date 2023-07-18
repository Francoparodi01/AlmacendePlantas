import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
import data from '../../mocks/mocks';
import { useNavigate } from 'react-router-dom';
import ProductoFiltrado from './ProductoFiltrado';
const FiltradoProductos = () => {

  const [lenguajeseleccionado, setLenguajeSeleccionado] = useState({
    "plantas de exterior": false,
    'Plantas de interior': false,
    'Herramientas': false,
    'Tierra': false,
    'Plantas de cerco': false,
  });
  
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const handleOnCheckbox = (e) => {
    const { value, checked } = e.target;
    setLenguajeSeleccionado({
      ...lenguajeseleccionado,
      [value]: checked,
    });
  
    if (checked) {
      const resultadoLenguaje = data.filter((item) => item.category === value);
      setDatosFiltrados([...datosFiltrados, ...resultadoLenguaje]); // Usa el operador spread (...) para agregar los elementos al array existente
    } else {
      const resultadoLenguaje = datosFiltrados.filter(
        (item) => item.category !== value
      );
      setDatosFiltrados(resultadoLenguaje); // Actualiza el estado directamente con el array filtrado
    }
  };

  const navigate = useNavigate()
  const handleNavigate = () =>{
    navigate('/product/filtrado')
  }
  
  console.log(datosFiltrados)

  return(
    <div className="product-filter">
      <h2>Categorías</h2>
      <Form>
        <div key="plantas de exterior" className="mb-3">
          <Form.Check
            type="radio"
            label="Plantas exterior"
            name="group1"
            value="plantas de exterior"
            onChange={handleOnCheckbox}
            onClick={handleNavigate}
          />
        </div>
        <div key="plantasInterior" className="mb-3">
          <Form.Check
            type="radio"
            label="Plantas interior"
            name="group1"
            value='Plantas de interior'
            onChange={handleOnCheckbox}
          />
        </div>
        <div key="plantas de cerco" className="mb-3">
          <Form.Check
            type="radio"
            label="plantas de cerco"
            name="group1"
            value="plantas de cerco"
            onChange={handleOnCheckbox}
          />
        </div>
        <div key="herramientas" className="mb-3">
          <Form.Check
            type="radio"
            label="Herramientas"
            name="group1"
            value="Herramientas"
            onChange={handleOnCheckbox}
          />
        </div>
        <div key="tierra" className="mb-3">
          <Form.Check
            type="radio"
            label="Tierra"
            name="group1"
            value="Tierra"
            onChange={handleOnCheckbox}
          />
        </div>
      </Form>
      <div className='item-container'>
            {datosFiltrados.map(item =>(
              <div className='card-container' key={item.id}>
                <img src={item.img} className='imagen-producto'></img>
              <h1>{item.name}</h1>
    </div>
  ))}
</div>
    </div>
  );
};

export default FiltradoProductos;