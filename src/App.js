import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import About from "./Routes/About";
import Homes from "./Routes/Homes"
import Contact from "./Routes/Contact"
import Products from "./Routes/Products"
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
            <Route index element={<Homes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/*" element={<Homes />} />
          </Routes>
        </>
      }
    </>
  );
}

export default App;