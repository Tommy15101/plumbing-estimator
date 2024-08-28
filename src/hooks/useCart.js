import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState({
    system: [],
    materials: [],
    equipment: [],
    reminders: [],
    subcontractors: [],
    clauses: [],
  });

  const toggleItemInCart = (category, item) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart[category].includes(item);
      if (isItemInCart) {
        // Remove item from cart
        return {
          ...prevCart,
          [category]: prevCart[category].filter(
            (cartItem) => cartItem !== item
          ),
        };
      } else {
        // Add item to cart
        return {
          ...prevCart,
          [category]: [...prevCart[category], item],
        };
      }
    });
  };

  const removeFromCart = (category, index) => {
    setCart((prevCart) => {
      const updatedCategory = prevCart[category].filter((_, i) => i !== index);
      return { ...prevCart, [category]: updatedCategory };
    });
  };

  const clearCart = () => {
    setCart({
      system: [],
      materials: [],
      equipment: [],
      reminders: [],
      subcontractors: [],
      clauses: [],
    });
  };

  return { cart, toggleItemInCart, removeFromCart, clearCart };
};

export default useCart;
