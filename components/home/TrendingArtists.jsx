"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from '@/components/layout/Container'
import AccentSpot from '@/components/ui/AccentSpot'

const artists = [
  {
    id: 1,
    name: "DJ Nova",
    genre: "Afro House",
    image: "/covers/google.jpg",
  },
  {
    id: 2,
    name: "Luna",
    genre: "Deep House",
    image: "/covers/yesese.jpg",
  },
  {
    id: 3,
    name: "Vortex",
    genre: "Techno",
    image: "/covers/friday.jpg",
  },
  {
    id: 4,
    name: "Kairo",
    genre: "Amapiano",
    image: "/covers/google.jpg",
  },
  {
    id: 5,
    name: "Zuri",
    genre: "Afrobeats",
    image: "/covers/yesese.jpg",
  },
  {
    id: 6,
    name: "Luna",
    genre: "Deep House",
    image: "/covers/yesese.jpg",
  },
  {
    id: 7,
    name: "Vortex",
    genre: "Techno",
    image: "/covers/friday.jpg",
  },
  {
    id: 8,
    name: "Kairo",
    genre: "Amapiano",
    image: "/covers/google.jpg",
  },
  {
    id: 9,
    name: "Zuri",
    genre: "Afrobeats",
    image: "/covers/yesese.jpg",
  },
];

export default function TrendingArtists() {

  const scroll = (direction) => {
    const container = document.getElementById("artist-scroll");
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-ink-black py-8 md:py-12 relative">
      <AccentSpot position="left-bottom" size={360} color="rgba(99,102,241,0.06)" blur={48} opacity={0.8} className="hidden md:block" />
      <Container>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold text-text-primary">
            Trending Artists
          </h2>
          <Link
            href="/artists"
            className="text-cyan-echo text-sm hover:underline"
          >
            View all →
          </Link>
        </div>

        {/* Wrapper */}
        <div className="relative">

          {/* Left Button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll artists left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 text-black p-2 rounded-full shadow hover:scale-110 transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll artists right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 text-black p-2 rounded-full shadow hover:scale-110 transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-ink-black to-transparent pointer-events-none z-[5]" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-ink-black to-transparent pointer-events-none z-[5]" />

          {/* Scroll Container */}
          <div
            id="artist-scroll"
            className="flex gap-6 overflow-x-auto scroll-smooth px-6 md:px-10 scrollbar-hide"
            role="list"
          >
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="min-w-[140px] flex-shrink-0 group cursor-pointer hover:scale-105 transition duration-300"
              >
                {/* Image */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto ring-2 ring-transparent group-hover:ring-cyan-echo transition">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Info */}
                <div className="text-center mt-4" role="listitem">
                  <h4 className="text-text-primary font-semibold tracking-wide">
                    {artist.name}
                  </h4>
                  <p className="text-text-muted text-sm">
                    {artist.genre}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}