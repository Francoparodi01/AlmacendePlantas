import maceta1 from '../assets/macetaInterior.png'
import tierra1 from '../assets/terraFertil.png'
import tierra2 from '../assets/tierraArhumus.png'
import tierra3 from '../assets/tierraelPaisajista.png'
import rastrillo from '../assets/rastrillo.png'
import oleotext from '../assets/oleo-Texano.png'
import lavanda from '../assets/Lavanda.png'
import ficus from '../assets/ficus.png'
import elefante from '../assets/elefante.png'

export const data = [
 {
    id: '1',
    name: "Maceta redonda",
    category: "Macetas",
    description: "Maceta redonda azul de interior",
    stock: 37,
    price: 350,
    img: maceta1
 },
 {
    id: '2',
    name: 'Tierra Fertil',
    category: "tierra",
    description: 'Tierra fertilizada lista para plantar',
    stock: 300,
    price: 800,
    img: tierra1  
 },
 {
    id: '3',
    name: 'Tierra de humus',
    category: "tierra",
    description: 'Maceta  olgante con gancho',
    stock: 3500,
    price: 1050,
    img: tierra2
 },
 {
    id: '4',
    name: 'Tierra el paisajista',
    category: "tierra",
    description: 'Tierra fertilizada lista para plantas',
    stock: 599,
    price: 700,
    img: tierra3
 },
 {
   id: '5',
   name: 'Rastrillo negro con mango',
   category: 'herramientas',
   description: 'Rastrillo para emparejar tierra',
   stock: 1000, 
   price: 200,
   img: rastrillo
 },
 {
   id: '6',
   name: 'Oleo texana',
   category: 'plantasDeCerco',
   description: 'planta recomendada para cerco',
   stock: 1000, 
   price: 200,
   img: oleotext
 },
 {
   id: '7',
   name: 'Lavanda',
   category:"plantasDeExterior",
   description:'lavanda',
   stock: 1000,
   price:100,
   img: lavanda
 },
 {
   id: '8',
   name: 'ficus',
   category: "plantasDeExterior",
   description:'',
   stock:1000,
   price:2321,
   img:ficus,
 },
 {
   id:'9',
   name:'elefante',
   category:"plantasDeExterior",
   description:'planta decorativa',
   stock:2311,
   price:2111,
   img:elefante,
 }

] 
export default data