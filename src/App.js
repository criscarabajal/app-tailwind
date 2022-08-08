import React from 'react';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
import {CartProvider} from './context/CartContext';
import ItemListConteiner from './components/ItemListConteiner.js';


function App() {
  return (
    <CartProvider>
      <div>
        <nav>
          <NavBar />
        </nav>
        <main>
          <ItemListConteiner />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
