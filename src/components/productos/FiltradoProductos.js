import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import data from '../../mocks/mocks';
import Item from './Item';
import { useNavigate } from 'react-router-dom';
import ProductoFiltrado from './ProductoFiltrado';

const FiltradoProductos = () => {
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterCategory = (category) => {
    const filtered = data.filter((product) => product.category.toLowerCase() === category.toLowerCase());
    console.log(filtered); // Verificar los datos filtrados en la consola
    setFilteredProducts(filtered);
    navigate(`/product/filtrado`)
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
        <div key="Tierra" className="mb-3">
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
      {filteredProducts.length > 0 && <ProductoFiltrado filteredProducts={filteredProducts} />}
    </div>
  );
};

export default FiltradoProductos;