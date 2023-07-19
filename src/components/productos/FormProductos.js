import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../mocks/mocks';

const FormProductos = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (e) => {
    const categoryId = e.target.value; // Obtenemos el valor de la categoría seleccionada
    navigate(`/category/${categoryId}`); // Navegamos a la ruta correspondiente a la categoría seleccionada
  };
  

  return (
    <div className="product-filter">
      <h2>Categorías</h2>
      <Form>
        <div key="plantas de exterior" className="mb-3">
          <Form.Check
            id="inputs-product-filter"
            type="radio"
            label="Plantas exterior"
            name="group1"
            value="plantasDeExterior" // Valor único para la categoría
            onChange={handleNavigate} // Usamos onChange para manejar los cambios en la selección
          />
        </div>
        <div key="plantasInterior" className="mb-3">
          <Form.Check
            id="inputs-product-filter"
            type="radio"
            label="Plantas interior"
            name="group1"
            value="plantasDeInterior"
            onChange={handleNavigate}
          />
        </div>
        <div key="plantas de cerco" className="mb-3">
          <Form.Check
            id="inputs-product-filter"
            type="radio"
            label="plantas de cerco"
            name="group1"
            value="plantasDeCerco"
            onChange={handleNavigate}
          />
        </div>
        <div key="herramientas" className="mb-3">
          <Form.Check
            id="inputs-product-filter"
            type="radio"
            label="Herramientas"
            name="group1"
            value="herramientas"
            onChange={handleNavigate}
          />
        </div>
        <div key="tierra" className="mb-3">
          <Form.Check
            id="inputs-product-filter"
            type="radio"
            label="Tierra"
            name="group1"
            value="tierra"
            onChange={handleNavigate}
          />
        </div>
      </Form>
    </div>
  );
};

export default FormProductos;
