import './App.css';
import Slogan from './components/Slogan';
import NavInfo from './components/NavInfo';
import Header from './components/Header';
import Carrousel from './components/Carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContenedorGrids from './components/ContenedorGrids';

function App() {
  return (
  <>
    <Slogan/>
    <NavInfo/>
    <Header/>
    <Carrousel/>
    <ContenedorGrids/>
  </>
  );
}

export default App;
