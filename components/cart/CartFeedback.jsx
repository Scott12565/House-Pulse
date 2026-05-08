'use client';

import { useCart } from "@/context/CartProvider";

export default function CartFeedback() {

    const { cartMessage } = useCart();

    if (!cartMessage) return null;

    return (
        <div
            className="
                fixed bottom-6 right-6
                z-[100]
                px-5 py-3
                rounded-xl
                bg-cyan-echo
                text-black
                font-medium
                shadow-lg
                animate-[slideUp_0.3s_ease]
            "
        >
            {cartMessage}
        </div>
    );
}