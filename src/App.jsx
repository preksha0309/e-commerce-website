import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Router>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Body cart={cart} setCart={setCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails cart={cart} setCart={setCart} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
