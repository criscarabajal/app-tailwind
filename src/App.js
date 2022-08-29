import React from "react";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import ItemListConteiner from "./components/ItemListConteiner.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Form from "./components/Form";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categoryId" element={<ItemListConteiner />} />
          <Route path="/producto/:idItem" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
