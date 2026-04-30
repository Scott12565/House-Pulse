'use client'
import Image from 'next/image';
import Link from 'next/link'
import { Play, Heart, ShoppingCart, Pause } from 'lucide-react';
import Container from '@/components/layout/Container'
import { usePlayer } from '../player/PlayerProvider';

export default function FeaturedTracks({ tracks }) {
  const { playTrack, isPlaying, currentTrack } = usePlayer();

  const isThisTrackPlaying = (track) => {
    return isPlaying && currentTrack?._id === track._id;
  };
  if (!tracks) return (
    <div className="text-center font-medium text-text-primary">
      <h2 className="text-2xl">No tracks available</h2>
    </div>
  );

  return (
    <section className="w-full bg-ink-black py-8 md:py-12" aria-label="Featured tracks">
      <Container>

        {/* === Header === */}
        <div className="flex items-center justify-between">
          <h2 className='text-3xl font-semibold text-text-primary'>
            Featured Tracks
          </h2>
          <Link href='/featured-tracks' className='text-cyan-echo uppercase text-sm font-medium hover:underline'>
            View all →
          </Link>
        </div>

        <div className="h-[1px] mt-3 bg-text-disabled" role="presentation" />

        {/* === Cards === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 gap-6">
          {tracks.map((track) => (
            <div key={track._id} className="relative group rounded-2xl shadow-lg bg-gradient-to-br from-[#071428] to-[#091020] overflow-hidden">
              {/* === Image === */}
              <div className="relative overflow-hidden w-full h-[220px] ">
                <Image
                  src={track.coverImageUrl}
                  alt={track.title}
                  fill
                  className='overflow-hidden object-cover group-hover:scale-110 transition duration-300'
                />

                {/* === Overlay === */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition duration-300 flex items-center justify-center" aria-hidden="false">
                  <div className="flex gap-4">
                    <button 
                    onClick={() => playTrack(track, tracks)}
                    type="button" aria-label={`Play preview for ${track.title}`} className="bg-text-primary/90 text-ink-black p-3 rounded-full hover:opacity-90">
                     {isThisTrackPlaying(track) ? ( 
                      <Pause size={20} className='transition-transform duration-200' /> 
                      ) : ( <Play size={20} className='transition-transform duration-200' />)}
                    </button>
                    <button type="button" aria-label={`Like ${track.title}`} className="bg-text-primary/90 text-ink-black p-3 rounded-full hover:opacity-90">
                      <Heart size={20} className='transition-transform duration-200' />
                    </button>
                    <button type="button" aria-label={`Add ${track.title} to cart`} className="bg-text-primary/90 text-ink-black p-3 rounded-full hover:opacity-90">
                      <ShoppingCart size={20} className='transition-transform duration-200' />
                    </button>
                  </div>
                </div>
              </div>

              {/* === Content === */}
              <div className="py-4 px-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg text-text-primary font-semibold">{track.artistName}</h4>
                  <span className="text-cyan-echo text-sm font-medium">R{track.priceZar}</span>
                </div>
                <p className="text-text-muted text-sm mt-1">{track.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}