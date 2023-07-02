import React,{useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import { data } from '../mocks/mocks.js'


const Search = () => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
      setValue(event.target.value);
    };
  
    const onSearch = (searchTerm) => {
      setValue(searchTerm);
      // our api to fetch the search result
      console.log("search ", searchTerm);
    };
  
  return (
    <div>
        <div >
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busca tus productos"
              className="me-2 botonBusqueda"
              id='form-control'
              aria-label="Search"
              value={value} onChange={onChange}
            />
            <div className="dropdown">
                {data.filter((item) => {
              const searchTerm = value.toLowerCase();
              const name = item.name.toLowerCase();
              return (
                searchTerm &&
                name.startsWith(searchTerm) &&
                name !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.name)}
                className="dropdown-row"
                key={item.name}
              >
                {item.name}
              </div>
               ))}
               </div>
            <Button variant="outline-success" onClick={() => onSearch(value)}>Search</Button>
          </Form>
        </div>
    </div>
  )
}

export default Search