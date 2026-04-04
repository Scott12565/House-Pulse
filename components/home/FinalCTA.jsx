"use client";

import Link from "next/link";

export default function FinalCTA() {
    return (
        <section className="w-full py-24 bg-gradient-to-r from-[#0f172a] via-[#020617] to-[#0f172a]">

            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                    Your Sound. Your Platform.
                </h2>

                {/* Subtext */}
                <p className="text-gray-400 mt-4 text-lg">
                    Discover music or share your own the choice is yours.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

                    {/* Explore */}
                    <Link
                        href="/discover"
                        className="px-8 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition duration-300"
                    >
                        Start Exploring
                    </Link>

                    {/* Upload */}
                    <Link
                        href="/upload"
                        className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:scale-105 transition duration-300"
                    >
                        Upload Your Music
                    </Link>

                </div>

            </div>

        </section>
    );
}