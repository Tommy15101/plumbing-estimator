// src/hooks/useCart.js

import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState({
    materials: [],
    equipment: [],
    reminders: [],
    subcontractors: [],
    clauses: [],
  });

  const addToCart = (category, item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [category]: [...prevCart[category], item],
    }));
  };

  const removeFromCart = (category, index) => {
    setCart((prevCart) => {
      const updatedCategory = prevCart[category].filter((_, i) => i !== index);
      return { ...prevCart, [category]: updatedCategory };
    });
  };

  const clearCart = () => {
    setCart({
      materials: [],
      equipment: [],
      reminders: [],
      subcontractors: [],
      clauses: [],
    });
  };

  return { cart, addToCart, removeFromCart, clearCart };
};

export default useCart;
