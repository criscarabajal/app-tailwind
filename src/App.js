import React from 'react';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
import {CartProvider} from './components/CartContext';


function App() {
  return (
    // <CartProvider></CartProvider>
      <div>
        <nav>
          <NavBar />
        </nav>
        <main>
          
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    
  );
}

export default App;
