const ListaProductosFiltrados = ({ filteredProducts }) => {
    return (
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            {/* Display other product information as needed */}
          </div>
        ))}
      </div>
    );
  };

  export default ListaProductosFiltrados;