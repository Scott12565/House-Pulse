'use client';

import {
    SkipBackIcon,
    SkipForwardIcon,
    CirclePauseIcon,
    CirclePlayIcon,
    Volume2,
    ShoppingCart,
    Heart
} from "lucide-react";

import Image from "next/image";
import { usePlayer } from "./PlayerProvider";

export default function BottomPlayer() {
    const { currentTrack, isPlaying, currentTime, duration, playTrack } = usePlayer();
    console.log('current track', currentTrack);
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md text-white p-4 z-100 shadow-lg">

            {/* Container */}
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">

                {/* Album Info */}

                
                    <div className="flex items-center gap-4 min-w-[200px]">
                        {currentTrack ? (
                            <>
                                <div className='w-16 h-16 relative rounded-full bg-transparant overflow-hidden'>
                                    <Image
                                    src={currentTrack?.coverImageUrl}
                                    alt="cover art"
                                    fill
                                    className="rounded-full object-cover shadow-md"
                                    />

                                </div>

                                
                            
                                <div className=" rounded-lg bg-transparant">
                                    <div>
                                        <h3 className="text-sm font-semibold">{currentTrack?.title || "No track playing"}</h3>
                                        <p className="text-xs text-text-muted">{currentTrack?.artistName || "Unknown Artist"}</p>
                                    </div>
                                </div>
                            
                            </>
                        
                        ) : (
                            <>
                                <div className="w-16 h-16 rounded-lg bg-dark-matter" />

                                <div>
                                    <h3 className="text-sm font-semibold">
                                        No track playing
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Unknown Artist
                                    </p>
                                </div>
                            </>

                            
                        )}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4">
                    <button
                    className="hover:scale-110 transition cursor-pointer">
                        <SkipBackIcon size={22} />
                    </button>

                    <button onClick={() => playTrack(currentTrack)}
                    className="hover:scale-110 transition cursor-pointer">
                        {isPlaying ? (
                            <CirclePauseIcon size={32} />
                        ) : (
                            <CirclePlayIcon size={32} />
                        )}
                    </button>

                    <button className="hover:scale-110 transition cursor-pointer">
                        <SkipForwardIcon size={22} />
                    </button>
                </div>

                {/* Progress */}
                <div className="flex items-center gap-3 w-full max-w-[500px]">
                    <span className="text-xs text-gray-400">02:20</span>

                    <div className="w-full h-[5px] bg-white/30 rounded-md overflow-hidden">
                        {/* progress fill */}
                        <div className="h-full bg-yellow-400 w-[40%] rounded-md"></div>
                    </div>

                    <span className="text-xs text-gray-400">05:31</span>
                </div>

                {/* Volume */}
                <div className="flex items-center gap-2">
                    <Volume2 size={20} />

                    <div className="w-[100px] h-[5px] bg-white/30 rounded-md overflow-hidden">
                        <div className="h-full bg-white w-[70%] rounded-md"></div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="hover:scale-110 transition cursor-pointer">
                        <Heart size={22} />
                    </button>

                    <button className="hover:scale-110 transition cursor-pointer">
                        <ShoppingCart size={22} />
                    </button>
                </div>

            </div>
        </div>
    );
}