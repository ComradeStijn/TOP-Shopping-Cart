import PropTypes from "prop-types";
import { useState } from "react";
import { CartContext } from "./Cart";


CartProvider.propTypes = {
  children: PropTypes.node,
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addCartContext(id, amount, price) {
    setCart(prevCart => {
      const alreadyInCart = prevCart.some(item => item.id === id);

      if (alreadyInCart) {
        return prevCart.map(item => item.id === id ? {...item, amount: amount, price: price} : {...item})
      } else {
        return [...prevCart, {id: id, amount: amount, price: price}]
      }
    })
  }

  function deleteCartContext(id) {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const store = {cart, addCartContext, deleteCartContext}
  return (
    <CartContext.Provider value={store}>
      {children}
    </CartContext.Provider>
  )
}






