import './App.css';
import Slogan from './components/Slogan';
import NavInfo from './components/NavInfo';
import Carrousel from './components/Carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContenedorGrids from './components/ContenedorGrids';
import NavBar from './components/NavBar';



function App() {
  return (
  <>
    <Slogan/>
    <NavInfo/>
    <NavBar/>
    <Carrousel/>
    <ContenedorGrids/>
  </>
  );
}

export default App;
