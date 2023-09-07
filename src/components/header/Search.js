import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { data } from '../../mocks/mocks';
import { Link, useNavigate } from 'react-router-dom';

const Search = () => {
  const [value, setValue] = useState('');
  const pushLocation = useNavigate();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = () => {
    // No es necesario pasar 'value' como argumento aquí
    pushLocation(`/detail/${value}`);
  };

  const filteredItems = data.filter((item) => {
    const searchTerm = value.trim().toLowerCase();
    const name = item.name.toLowerCase();
    return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
  }).slice(0, 2);

  return (
    <div className='search-container'>
      <Form className="d-flex buscador">
        <div className='form-container'>
          <Form.Control
            type="search"
            placeholder="Busca tus productos"
            className="me-2 botonBusqueda"
            id="form-control"
            aria-label="Search"
            value={value}
            onChange={onChange}
          />
          <div>
            <div className="dropdown">
              {filteredItems.map((item) => (
                <Link to={`/detail/${item.id}`} className="dropdown-row" key={item.id}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Button variant="outline-success" id='botonSearch' onClick={onSearch}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default Search;
