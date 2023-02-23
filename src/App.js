import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import './Css/App.css'

import Navbar from "./Components/Navbar/Navbar";
import About from "./Routes/About";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Products from "./Routes/products/AllProducts"
import Cart from "./Routes/Cart";
import MainLoading from "./Components/Loading/MainLoading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      <MainLoading />
      setIsLoading(false)
    }, 2000);

  }, []);

  return (
    <>
      {isLoading ? <MainLoading /> :
        <>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </>
      }
    </>
  );
}

export default App;