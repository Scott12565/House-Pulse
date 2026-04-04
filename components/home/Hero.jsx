import Link from "next/link";
import HeroSlider from "./HeroSlider";
import getTracks from "@/lib/api";
import Container from '@/components/layout/Container'
import AccentSpot from '@/components/ui/AccentSpot'

export default async function Hero() {
  const tracks = await getTracks();
  return (
    <section className="relative w-full bg-ink-black overflow-hidden py-20 md:py-28" aria-label="Hero">

      <AccentSpot position="top-right" size={420} color="rgba(14,165,168,0.12)" blur={48} opacity={0.7} />

      <Container>
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
          <div className="relative min-h-[380px] md:min-h-[480px] ">
            <HeroSlider tracks={tracks} />
          </div>
        </div>
      </Container>
    </section>
  );
}