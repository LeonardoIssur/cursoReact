import React, { useState, createContext } from 'react';
import { useNotification } from '../hooks/useNotification';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { showNotification } = useNotification();
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart(prevCart => [...prevCart, productToAdd]);
    } else {
      showNotification('error', 'El producto ya está agregado');
    }
  };

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(prod => prod.id !== id);
    setCart(updatedCart);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, prod) => total + prod.quantity, 0);
  };

  const totalQuantity = getTotalQuantity();

  const getTotal = () => {
    return cart.reduce((total, prod) => {
      return total + (prod.quantity && !isNaN(prod.quantity) ? prod.quantity * prod.price : 0);
    }, 0);
  };

  const total = getTotal();

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      totalQuantity,
      total,
      clearCart,
      isInCart,
      removeItem
    }}>
      {children}
    </CartContext.Provider>
  );
};