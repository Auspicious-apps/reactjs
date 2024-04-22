import React from "react";
import Navbar from "../components/Navbar";
import Descargas from "../components/Descargas";
import Perguntas from "../components/Perguntas";
import Pasos from "../components/Pasos";
import Ilustraciones from "../components/Ilustraciones";
import Expricance from "../components/Expricance";
import Cart from "../components/Cart";
import { products } from "../context/siteStore";
import { useState } from "react";

const Gallery = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar toggleCart={toggleCart} />

      {showCart && <Cart toggleHandle={toggleCart} products={products} />}
      <Descargas />
      <Perguntas />
      <Pasos />
      <Ilustraciones />
      <Expricance />
    </div>
  );
};

export default Gallery;
