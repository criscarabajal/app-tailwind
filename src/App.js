import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar/>
        {/* <ItemListConteiner greeting={"Usando props en react"}/> */}
      </nav>
      
        
      
      <ItemDetailContainer />
    </div>
  );
}

export default App;
