import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar/>
        {/* <ItemListConteiner greeting={"Usando props en react"}/> */}
      </nav>
      
        <h1>BIENVENIDO</h1>
      
      {/* <ItemDetailContainer /> */}
    </div>
  );
}

export default App;
