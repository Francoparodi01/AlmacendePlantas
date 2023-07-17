import React from 'react';
import Item from './Item';
import ContenedorHeader from '../contenedores/ContenedorHeader';

const ProductoFiltrado = ({filteredProducts}) => {
    console.log(filteredProducts)
  return (
    
<>
<ContenedorHeader/>
<div>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <Item data={product} />
        </div>
      ))}
    </div>
</>
  );
};

export default ProductoFiltrado;
