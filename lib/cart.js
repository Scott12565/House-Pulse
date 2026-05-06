// save track to local storage

const CART_KEY = "cart";

export const getCart = () => {
    // check if window is defined (to avoid issues with server-side rendering)
    if (typeof window === "undefined") return [];

    const cart = localStorage.getItem(CART_KEY);

    try {
        const parsed = cart ? JSON.parse(cart) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

// save track to local storage
export const saveCart = (cart) => {
    if (typeof window === "undefined") return;

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// add track to cart
export const addToCart = (track) => {
    const cart = getCart();

    // check if track already exist in cart
    const exists = cart.some(item => item._id === track._id);
    const updatedCart = exists ? cart : [...cart, track];

    saveCart(updatedCart);

    // return success message
    return {
        cart: updatedCart,
        success: !exists,
        message: exists ? "Track already in cart" : "Track added to cart"
    }
}

// remove track from cart
export const removeFromCart = (trackId) => {
    const cart = getCart();

    // remove track from cart
    const updatedCart = cart.filter(item => item._id !== trackId);

    saveCart(updatedCart);

    return {
        cart: updatedCart,
        success: true,
        message: "Track removed from cart"
    };
}

// clear cart
export const clearCart = () => {
    if (typeof window === "undefined") return { cart: [] };

    localStorage.removeItem(CART_KEY);

    return {
        cart: [],
        success: true,
        message: "Cart cleared"
    };
}