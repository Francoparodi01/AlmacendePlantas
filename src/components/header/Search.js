import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { data } from '../../mocks/mocks';
import { useNavigate } from 'react-router-dom';


const Search = () => {
  const [value, setValue] = useState('')

  const pushLocation = useNavigate();


  const onChange = (event) => {
    setValue(event.target.value);
    

  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    pushLocation(`/search/${searchTerm}`)
    console.log("search ", searchTerm);
  };



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
            {data.filter((item) => {
                const searchTerm = value.toLowerCase();
                const name = item.name.toLowerCase();
                  return (
                      searchTerm &&name.startsWith(searchTerm) &&name !== searchTerm)})
                    .slice(0, 2).map((item) => (
                    <ul onClick={() => onSearch(item.name)} className="dropdown-row"key={item.name}>
                      {item.name}
                    </ul>
              ))}
          </div>
        </div>
        </div>
        <Button variant="outline-success" id='botonSearch' onClick={() => onSearch(value)}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default Search;