import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import Cart from './components/Cart';
const App = () => {
  return (
    <CartProvider> {/* Wrap App with CartProvider */}
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </CartProvider>
  );
};

export default App;
