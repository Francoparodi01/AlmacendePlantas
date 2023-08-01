import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/contenedores/ContenedorHome';
import ContenedorProductos from './components/contenedores/ContenedorProductos';
import ProductoFiltrado from './components/productos/ProductoFiltrado'
import ItemCard from './components/productos/ItemCard'
function App({data}) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productos' element={<ContenedorProductos/>} />
          <Route path='/product/filtrado' element={<ProductoFiltrado/>}/>
          <Route path='/category/:categoryId' element={<ProductoFiltrado/>}/>
          <Route path='/detail/:productId' element={<ItemCard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
