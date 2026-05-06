'use client';

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartProvider";
import { usePlayer } from "@/components/player/PlayerProvider";
import { Play, Pause, Heart, Trash2 } from "lucide-react";

export default function CartPage() {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const { playTrack, isPlaying, currentTrack } = usePlayer();

    const [likedItems, setLikedItems] = useState({});

    const totalPrice = cartItems.reduce((acc, item) => acc + item.priceZar, 0);

    const isTrackPlaying = (track) => {
        return isPlaying && currentTrack?._id === track._id;
    };

    const toggleLike = (id) => {
        setLikedItems((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-ink-black text-text-primary pt-24 px-6">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold mb-2">Your cart is empty</h2>
                    <p className="text-text-muted">Add some tracks to get started</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-ink-black text-text-primary pt-24 px-4 sm:px-6 md:px-12 pb-10">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold">Your Cart</h1>
                    <p className="text-text-muted text-sm mt-1">
                        Your selected tracks
                    </p>
                </div>

                <button
                    onClick={clearCart}
                    className="text-sm text-red-400 hover:text-red-300 transition self-start sm:self-auto"
                >
                    Clear Cart
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                {/* LEFT - ITEMS */}
                <div className="lg:col-span-2 space-y-4">

                    {cartItems.map((item) => {
                        const liked = likedItems[item._id];
                        const playing = isTrackPlaying(item);

                        return (
                            <div
                                key={item._id}
                                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                            >

                                {/* Cover */}
                                <div className="relative w-full sm:w-20 h-40 sm:h-20 rounded-xl overflow-hidden">
                                    <Image
                                        src={item.coverImageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-semibold truncate">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-text-muted truncate">
                                        {item.artistName}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">

                                    {/* Play */}
                                    <button
                                        onClick={() => playTrack(item, cartItems)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full border transition
                                            ${playing
                                                ? "bg-cyan-echo text-black border-cyan-echo"
                                                : "bg-white/10 border-white/10 hover:bg-white/20"
                                            }
                                        `}
                                    >
                                        {playing ? <Pause size={18} /> : <Play size={18} />}
                                    </button>

                                    {/* Heart */}
                                    <button
                                        onClick={() => toggleLike(item._id)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full border transition
                                            ${liked
                                                ? "bg-red-500 text-white border-red-500"
                                                : "bg-white/10 border-white/10 hover:bg-white/20"
                                            }
                                        `}
                                    >
                                        <Heart size={18} />
                                    </button>

                                    {/* Price */}
                                    <span className="text-cyan-echo font-semibold">
                                        R{item.priceZar}
                                    </span>

                                    {/* Remove */}
                                    <button
                                        onClick={() => removeFromCart(item._id)}
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-red-500 hover:border-red-500 transition"
                                    >
                                        <Trash2 size={16} />
                                    </button>

                                </div>
                            </div>
                        );
                    })}

                </div>

                {/* RIGHT - SUMMARY */}
                <div className="h-fit p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10">

                    <h2 className="text-xl font-semibold mb-4">Summary</h2>

                    <div className="flex justify-between text-sm text-text-muted mb-2">
                        <span>Items</span>
                        <span>{cartItems.length}</span>
                    </div>

                    <div className="flex justify-between text-sm text-text-muted mb-6">
                        <span>Total</span>
                        <span className="text-text-primary font-medium">
                            R{totalPrice}
                        </span>
                    </div>

                    <button className="w-full bg-cyan-echo text-black py-3 rounded-lg font-semibold hover:bg-cyan-echo-hover transition">
                        Checkout
                    </button>

                    <button
                        onClick={clearCart}
                        className="w-full mt-3 text-sm text-red-400 hover:text-red-300 transition"
                    >
                        Clear Cart
                    </button>

                </div>

            </div>
        </div>
    );
}