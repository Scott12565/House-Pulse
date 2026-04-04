"use client";

import { Music2, ShoppingCart } from "lucide-react";

export default function ForListeners() {
    return (
        <section className="w-full bg-ink-black py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-20">

                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
                        Built for Listeners
                    </h2>
                    <p className="text-text-muted mt-2">
                        Discover new sounds and directly support the artists you love.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Discover Card */}
                    <div className="bg-dark-matter p-8 rounded-2xl hover:scale-[1.02] transition duration-300 group">

                        <div className="mb-4">
                            <Music2 className="text-cyan-echo group-hover:scale-110 transition" size={32} />
                        </div>

                        <h3 className="text-xl font-semibold text-text-primary mb-2">
                            Discover New Music
                        </h3>

                        <p className="text-text-muted mb-6">
                            Explore trending tracks, rising artists, and fresh sounds curated for you.
                        </p>
                    </div>

                    {/* Support Card */}
                    <div className="bg-dark-matter p-8 rounded-2xl hover:scale-[1.02] transition duration-300 group">

                        <div className="mb-4">
                            <ShoppingCart className="text-cyan-echo group-hover:scale-110 transition" size={32} />
                        </div>

                        <h3 className="text-xl font-semibold text-text-primary mb-2">
                            Own & Support Music
                        </h3>

                        <p className="text-text-muted mb-6">
                            Buy tracks and directly support artists no middlemen.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}