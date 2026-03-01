import Link from "next/link";
import HeroSlider from "./HeroSlider";
import getTracks from "@/lib/api";
import FeaturedTracks from "./FeaturedTracks";


export default async function Hero() {
  const tracks = await getTracks();
  return (
    <main className="relative w-full bg-ink-black overflow-hidden pt-28 sm:pt-32 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20 py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-cyan-echo text-base sm:text-lg font-medium">
              Marketplace for listeners, producers, creators.
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl text-text-primary leading-tight">
              Discover Tracks.
              <br />
              Own the Rights.
            </h1>

            <p className="text-base sm:text-lg text-text-secondary max-w-xl">
              A curated marketplace where producers can sell premium tracks and
              creators can discover, preview, and license instantly.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/explore"
                className="bg-cyan-echo/90 text-base sm:text-lg text-ink-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-cyan-echo-hover transition"
              >
                Explore Tracks
              </Link>

              <Link
                href="/sell"
                className="bg-night-slate text-base sm:text-lg text-text-primary px-6 py-3 rounded-lg border border-graphite-frame font-medium shadow-md hover:bg-dark-matter transition"
              >
                Sell Your Music
              </Link>
            </div>

            <p className="text-sm sm:text-base text-text-muted font-medium">
              No subscription. Pay per track. Clear licensing.
            </p>
          </div>

          {/* Right */}
          <HeroSlider tracks={tracks} />
        </div>

        {/* === Featured Tracks Section === */}
        {/* <div>
          <FeaturedTracks tracks={tracks} />
        </div> */}
      </div>
    </main>
  );
}