"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-ink-black border-t border-white/10 py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-20">

                {/* Grid */}
                <div className="grid md:grid-cols-4 gap-10">

                    {/* 🎧 Brand */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">
                            HousePulse
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Discover, stream, and support independent artists around the world.
                        </p>
                    </div>

                    {/* 🔍 Explore */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Explore</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>
                                <Link href="/discover" className="hover:text-white transition">
                                    Discover
                                </Link>
                            </li>
                            <li>
                                <Link href="/artists" className="hover:text-white transition">
                                    Artists
                                </Link>
                            </li>
                            <li>
                                <Link href="/trending" className="hover:text-white transition">
                                    Trending
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 🎤 Artists */}
                    <div>
                        <h3 className="text-white font-medium mb-4">For Artists</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>
                                <Link href="/upload" className="hover:text-white transition">
                                    Upload Music
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="hover:text-white transition">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/analytics" className="hover:text-white transition">
                                    Analytics
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 🌐 Socials */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Connect</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Twitter / X
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} HousePulse. All rights reserved.
                </div>

            </div>
        </footer>
    );
}