import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import data from '../../mocks/mocks';

const FiltradoProductos = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterCategory = (category) => {
    const filtered = data.filter((product) => product.category.toLowerCase() === category.toLowerCase());
    setFilteredProducts(filtered);
  };

  return (
    <div className="product-filter">
      <h2>Categorías</h2>
      <Form>
        <div key="plantasExterior" className="mb-3">
          <Form.Check
            id="inputs-product-filter"
            type="radio"
            label="Plantas exterior"
            name="group1"
            value="plantas de exterior"
            onChange={() => filterCategory('planta de exterior')}
          />
        </div>
        <div key="plantasInterior" className="mb-3">
          <Form.Check
            id="inputs-product-filter"
            type="radio"
            label="Plantas interior"
            name="group1"
            onChange={() => filterCategory('Plantas de interior')}
          />
        </div>
        <div key="plantasCerco" className="mb-3">
          <Form.Check
            id="inputs-product-filter"
            type="radio"
            label="Plantas de cerco"
            name="group1"
            value="plantasCerco"
            onChange={() => filterCategory('Plantas de cerco')}
          />
        </div>
        <div key="herramientas" className="mb-3">
          <Form.Check
            id="inputs-product-filter"
            type="radio"
            label="Herramientas"
            name="group1"
            value="herramientas"
            onChange={() => filterCategory('herramientas')}
          />
        </div>
        <div key="herramientas" className="mb-3">
          <Form.Check
            id="inputs-product-filter"
            type="radio"
            label="Tierra"
            name="group1"
            value="Tierra"
            onChange={() => filterCategory('tierra')}
          />
        </div>
      </Form>
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltradoProductos;
