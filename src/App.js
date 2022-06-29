import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListConteiner from './components/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar/>
        <ItemListConteiner greeting={"Usando props en react"}/>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
