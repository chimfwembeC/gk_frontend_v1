import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart data from localStorage on component mount
    const cartDataJSON = localStorage.getItem('cart');
    const savedCartItems = JSON.parse(cartDataJSON);
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  // Serialize cart data and store in localStorage whenever cartItems change
  useEffect(() => {
    const cartDataJSON = JSON.stringify(cartItems);
    localStorage.setItem('cart', cartDataJSON);
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    toast.success("item added to  cart successful!");
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    toast.success("item removed from cart successful!");
    window.location.href = "/cart"; 

  };

  const clearCart = () => {
    setCartItems([]);
    toast.success("cart cleared successful!")
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


