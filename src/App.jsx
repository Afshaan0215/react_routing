import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';


function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="des/:id" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;