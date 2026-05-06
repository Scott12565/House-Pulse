'use client';

import { createContext, useState, useContext, useEffect } from "react";
import {
    getCart,
    addToCart as addToCartToStorage,
    removeFromCart as removeFromCartFromStorage,
    clearCart as clearCartFromStorage
} from "@/lib/cart";

const CartContext = createContext();

export default function CartProvider({children}) {
    // cartItems state
    const [cartItems, setCartItems] = useState([]);

    // load cart items from local storage on component mount
    useEffect(() => {
        setCartItems(getCart());
    }, []);

    // functions to control cart

    // add track to cart
    const addToCart = (track) => {
        const results = addToCartToStorage(track);
        if(results.success) {
            setCartItems(results.cart);
        }

        console.log(results);
        return {results, success: results.success, message: results.message}
    }
    // remove track from cart
    const removeFromCart = (trackId) => {
        const updatedCart = removeFromCartFromStorage(trackId);
        setCartItems(updatedCart.cart);
        return updatedCart;
    }

    // clear cart
    const clearCart = () => {
        const updatedCart = clearCartFromStorage();
        setCartItems(updatedCart.cart);
    
    }

    // counter to track total items in cart
    const cartCount = cartItems.length;
  return (
    <CartContext.Provider value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount
    }}>
        {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);