import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import ProductList from './components/ProjectList';
import ProductDetails from './components/ProjectDetails';

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<div>Cart Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
