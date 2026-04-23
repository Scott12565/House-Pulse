'use client'
import { getNextIndex, getPrevIndex } from '@/lib/sliders';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react'
import { usePlayer } from '../player/PlayerProvider';

export default function HeroSlider({ tracks }) {
    const [index, setIndex] = useState(0);

    // use player context
    const { playTrack } = usePlayer();

    // check if track length is not 0
    if (!tracks || tracks.length === 0) {
        return (
            <div className="w-full max-w-md mx-auto rounded-2xl border border-graphite-frame bg-dark-matter p-6">
                <p className="text-text-muted">No tracks available</p>
            </div>
        );
    }
    // set current track based on index
    const currentTrack = tracks[index];

    // get next track index
    const nextTrackIndex = () => {
        setIndex(getNextIndex(index, tracks.length));
    }
    // get previous track index
    const prevTrack = () => {
        setIndex(getPrevIndex(index, tracks.length));
    }

    return (
        <div className='relative w-full max-w-md mx-auto group '>
        {/* === Left  & Right Arrow for previouse track === */}
        {/* Navigation btn */}
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-night-slate hover:bg-dark-matter text-text-primary rounded-full p-2 z-10"
        onClick={prevTrack}>
            <ArrowLeft size={20} />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-night-slate hover:bg-dark-matter text-text-primary rounded-full p-2 z-10"
        onClick={nextTrackIndex}>
            <ArrowRight size={20} />
        </button>

      {/* === songs Cards  */}
            <div className="relative overflow-hidden rounded-2xl border border-graphite-frame/60 bg-dark-matter/80 backdrop-blur-sm p-6 shadow-xl transition duration-300 group-hover:scale-[1.02] ">
            <div className="relative overflow-hidden h-[360px] sm:h-[420px] w-full bg-night-slate">
                <Image src={currentTrack.coverImageUrl}
            
                alt={currentTrack.title}
                fill
                priority
                className='w-full object-cover rounded-lg my-2'
                /> 
            </div>
            

            {/* === Image Overlay === */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/70 to-transparent"></div>

            {/* === Song Info === */}
            <div className="absolute bottom-0 left-0 w-full p-10">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className='text-xl font-bold text-text-primary'>{currentTrack.title}</h2>
                        <p className="text-sm text-text-muted">{currentTrack.artistName}</p>
                    </div>

                        <div className="px-4 py-1.5 rounded-full bg-cyan-echo/10 border border-cyan-echo/40 text-sm font-semibold text-cyan-echo backdrop-blur-lg">
                            R{currentTrack.priceZar}
                        </div>
                    
                </div>

                {/* === Action Buttons === */}
                    <div className="flex gap-4 mt-5">
                        <button onClick={() => playTrack(currentTrack)}
                        className="flex-1 py-2.5 rounded-lg border border-graphite-frame bg-night-slate hover:bg-dark-matter transition text-sm text-text-primary cursor-pointer ">
                            Preview
                        </button>

                        <button className="flex-1 py-2.5 rounded-lg bg-cyan-echo text-ink-black font-semibold shadow-lg hover:bg-cyan-echo-hover hover:shadow-cyan-echo/40 transition text-sm">
                            Add to Cart
                        </button>
                    </div>
            </div>
      </div>
    </div>
  )
}
