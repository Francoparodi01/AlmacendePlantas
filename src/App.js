import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/contenedores/ContenedorHome';
import ContenedorProductos from './components/contenedores/ContenedorProductos';
import ContenedorFiltrados from './components/contenedores/ContenedorFiltrados'
import ContenedorItemCard from './components/contenedores/ContenedorItemCard';
import { ShoppingCartProvider } from './components/context/CartContext';
import { ContenedorCart } from './components/contenedores/ContenedorCart';

function App() {
  return (
    <>
        <BrowserRouter>
      <ShoppingCartProvider>
        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/productos' element={<ContenedorProductos/>} />
          <Route path='/category/:categoryId' element={<ContenedorFiltrados/>}/>
          <Route path='/detail/:productName' element={<ContenedorItemCard/>}/>
          <Route path='/cart' element={<ContenedorCart/>}/>
        </Routes>
      </ShoppingCartProvider>
        </BrowserRouter>
      
    </>
  );
}
export default App;