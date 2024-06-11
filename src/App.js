import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import { ThemeProvider } from "./context/ThemeProvider";

import Cart from "./components/Cart";
import Footer from "./components/Footer";
const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        {" "}
        {/* Wrap App with CartProvider */}
        <Router>
          <AppNavbar />
          <Routes>
            <Route path="/" element={<ProjectList />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>         
        </Router>
      </CartProvider>
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default App;
