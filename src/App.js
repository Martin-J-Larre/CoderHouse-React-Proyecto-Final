import React, {useState}  from "react";
import productos from "./components/productos";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import { BrowserRouter} from "react-router-dom";
import './App.css'

const App = () => {
  // importar fake JSON e iteralo pasandolo por props a los hijos
  const { productItems } = productos;
  const [items, setItems] = useState([]);

  const cargarProductos = (product) => {
    const productExist = items.find((item) => item.id === product.id);
    if(productExist){
      setItems(items.map((item) => item.id === product.id ? 
      {...productExist, cantidad: productExist.cantidad + 1}: item))
    }
    else{
      setItems([...items,{...product, cantidad: 1}]);
    }
  }
  const removerProductos = (product) => {
    const productExist = items.find((item) => item.id === product.id);
    if(productExist.cantidad === 1){
      setItems(items.filter((item) => item.id !== product.id));
    }
    else{
      setItems(
        items.map((item) => item.id === product.id ? {...productExist, cantidad: productExist.cantidad -1}: item )
      )
    }
  }
  //  Función para boton clean
  const botonClean = () =>{
    setItems([]);
  }


  return (
     <div>
       <BrowserRouter>
            < NavBar items={items} />
            <Routes productItems={productItems}
            items={items}
            cargarProductos={cargarProductos}
            removerProductos = {removerProductos}
            botonClean={botonClean}
            />
       </BrowserRouter>
     </div>
  );
 
};
export default App;
