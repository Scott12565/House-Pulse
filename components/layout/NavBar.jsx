'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
    const isLoggedIn = true;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 bg-ink-black/50 backdrop-blur-lg text-text-primary py-4 px-8 flex justify-between items-center w-full mx-auto border-b border-graphite-frame">
            {/* Logo */}
            <div className="text-cyan-echo text-lg sm:text-2xl font-bold font-sora">
                <Link href="/">House Pulse</Link>
            </div>

            {/* === Desktop NavBar */}
            {/* Middle links */}
            <div className="hidden md:flex items-center space-x-6">
                <div className="text-lg">
                    <span className="text-white/60">Search</span>
                </div>
                <Link
                    href="/explore"
                    className="text-lg hover:text-cyan-echo-hover transition duration-300"
                >
                    Explore
                </Link>
                <Link
                    href="/library"
                    className="text-lg hover:text-cyan-echo-hover transition duration-300"
                >
                    Library
                </Link>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-6">
                {isLoggedIn ? (
                    <>
                        <Link
                            href="/cart"
                            className="text-lg hover:text-cyan-echo-hover transition duration-300"
                        >
                            Cart
                        </Link>

                        {/* Profile dropdown */}
                        <div className="relative group">
                            <span className="text-lg hover:text-cyan-echo-hover transition duration-800 cursor-pointer">
                                Profile
                            </span>

                            <div className="hidden group-hover:block absolute right-0 mt-2 w-44 rounded-lg bg-shadow-line border border-graphite-frame py-2">
                                <Link
                                    href="/profile"
                                    className="block px-4 py-2 hover:text-cyan-echo-hover"
                                >
                                    Profile
                                </Link>
                                <Link
                                    href="/orders"
                                    className="block px-4 py-2 hover:text-cyan-echo-hover"
                                >
                                    Orders
                                </Link>
                                <Link
                                    href="/settings"
                                    className="block px-4 py-2 hover:text-cyan-echo-hover"
                                >
                                    Settings
                                </Link>
                                <button className="w-full text-left px-4 py-2 hover:text-cyan-echo-hover">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Link
                            href="/login"
                            className="text-lg hover:text-cyan-echo-hover transition duration-300"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="text-lg hover:text-cyan-echo-hover transition duration-300"
                        >
                            Sign Up
                        </Link>
                    </>
                )}
            </div>

            {/* === Mobile Devices === */}
                {/* Hamburger menu */}
            <button className="md:hidden flex items-center space-x-6 border border-graphite-frame rounded-lg px-2 py-1 "
            
            onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (<FaTimes size={20} color="graphite-frame" />) : (<FaBars size={20} />)}
            </button>

            {/* Mobile Menu */}
            {
                isOpen && (
                    <div className=" w-2/3 absolute top-[66px] right-5 shadow-md rounded-md p-4 shadow-lg z-10 py-4 px-4 bg-shadow-line border border-graphite-frame">
                        <div className="w-full hover:text-cyan-echo-hover">
                            <span className="">Search</span>
                        </div>

                        <div className="space-y-4 mt-4 flex flex-col">
                            <Link href='/explore' className=" hover:text-cyan-echo-hover transition duration-300" onClick={() => setIsOpen(false)}>Explore</Link>
                            <Link href='/library' className="w-full hover:text-cyan-echo-hover transition duration-300" onClick={() => setIsOpen(false)}>Library</Link>
                        </div>

                        <div className="h-px bg-graphite-frame my-2" />

                        {
                            isLoggedIn ? (
                                <div className="text-lg space-y-4 mt-2 flex flex-col">
                                    <Link href='/cart' className="w-full hover:text-cyan-echo-hover transition duration-300" onClick={() => setIsOpen(false)}>Cart</Link>
                                    <Link href='/settings' className="w-full hover:text-cyan-echo-hover transition duration-300" onClick={() => setIsOpen(false)}>Settings</Link>
                                    <button
                                        className="text-left py-2 hover:text-cyan-echo-hover transition duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="text-lg space-y-4 mt-2 flex flex-col">
                                    <Link
                                        href="/login"
                                        className=" hover:text-cyan-echo-hover transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/signup"
                                        className=" hover:text-cyan-echo-hover transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </nav>
    );
}

export default NavBar;