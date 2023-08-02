import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/contenedores/ContenedorHome';
import ContenedorProductos from './components/contenedores/ContenedorProductos';
import ProductoFiltrado from './components/productos/ProductoFiltrado'
import ItemCard from './components/productos/ItemCard'
import ContenedorFiltrados from './components/contenedores/ContenedorFiltrados'
import CombinedComponents from './components/CombinedComponents';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productos' element={<ContenedorProductos/>} />
          <Route path='/category/:categoryId' element={<ContenedorFiltrados/>}/>
          <Route path='/detail/:productName' element={<CombinedComponents/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;