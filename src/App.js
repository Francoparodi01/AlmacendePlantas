import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/contenedores/ContenedorHome';
import ContenedorProductos from './components/contenedores/ContenedorProductos';
import ProductoFiltrado from './components/productos/ProductoFiltrado'
import ItemCard from './components/productos/ItemCard'
<<<<<<< HEAD

function App({data}) {
=======
import ContenedorFiltrados from './components/contenedores/ContenedorFiltrados'

function App() {
>>>>>>> master
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<Home/>} />
          <Route path='/productos' element={<ContenedorProductos/>} />
          <Route path='/product/filtrado' element={<ProductoFiltrado/>}/>
          <Route path='/category/:categoryId' element={<ProductoFiltrado/>}/>
          <Route path='/detail/:productId' element={<ItemCard/>} />
=======
          <Route path='/' element={<Home/>}/>
          <Route path='/productos' element={<ContenedorProductos/>} />
          <Route path='/category/:categoryId' element={<ContenedorFiltrados/>}/>
          <Route path='/detail/:productName' element={<ItemCard/>}/>
>>>>>>> master
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
