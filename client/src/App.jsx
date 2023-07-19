import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Basket from "./pages/Basket";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="wrapper">
      <nav>
        <Link to="/"> Home</Link>
        <br />
        <Link to="/about"> About</Link>
        <br />
        <Link to="/basket"> Basket</Link>
        <br />
        <Link to="/contact"> Contact</Link>
        <br />
        <br />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
