'use client';

import { createContext, useState, useContext, useEffect } from "react";

import {
    getCart,
    addToCart as addToCartToStorage,
    removeFromCart as removeFromCartFromStorage,
    clearCart as clearCartFromStorage
} from "@/lib/cart";

const CartContext = createContext();

export default function CartProvider({ children }) {

    // cartItems state
    const [cartItems, setCartItems] = useState([]);

    // feedback state
    const [cartMessage, setCartMessage] = useState("");

    // load cart items from local storage on component mount
    useEffect(() => {
        setCartItems(getCart());
    }, []);

    // clear feedback automatically
    useEffect(() => {
        if (!cartMessage) return;

        const timer = setTimeout(() => {
            setCartMessage("");
        }, 2000);

        return () => clearTimeout(timer);

    }, [cartMessage]);

    // add track to cart
    const addToCart = (track) => {

        const results = addToCartToStorage(track);

        setCartItems(results.cart);

        setCartMessage(results.message);

        return results;
    };

    // remove track from cart
    const removeFromCart = (trackId) => {

        const results = removeFromCartFromStorage(trackId);

        setCartItems(results.cart);

        setCartMessage(results.message);

        return results;
    };

    // clear cart
    const clearCart = () => {

        const results = clearCartFromStorage();

        setCartItems(results.cart);

        setCartMessage(results.message);
    };

    // counter to track total items in cart
    const cartCount = cartItems.length;

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                cartCount,
                cartMessage
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);