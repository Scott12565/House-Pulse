'use client';

import {
    SkipBackIcon,
    SkipForwardIcon,
    CirclePauseIcon,
    CirclePlayIcon,
    Volume2,
    ShoppingCart,
    Heart,
    Volume1,
    VolumeX,
    ListIcon
} from "lucide-react";

import Image from "next/image";
import { usePlayer } from "./PlayerProvider";
import { useEffect, useState } from "react";

export default function BottomPlayer() {
    const [isDraging, setIsDraging] = useState(false);

    const {
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        playTrack,
        nextTrack,
        prevTrack,
        volume,
        isMuted,
        volumeControl,
        toggleMute,
        toggleQueue,
        audioRef
    } = usePlayer();

    const formatTime = (time) => {
        if (!time) return '00:00';

        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);

        return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
    };

    const progress = duration ? (currentTime / duration) * 100 : 0;

    const handleSeekToPosition = (e) => {
        if (!audioRef.current || !duration) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = clickX / rect.width;

        audioRef.current.currentTime = percent * duration;
    };

    const getVolumeIcon = () => {
        if (isMuted || volume === 0) return <VolumeX size={20} />;
        if (volume <= 0.3) return <Volume1 size={20} />;
        return <Volume2 size={20} />;
    };

    const handleMouseDown = (e) => {
        setIsDraging(true);
        handleSeekToPosition(e);
    };

    const handleMouseMove = (e) => {
        if (!isDraging) return;
        handleSeekToPosition(e);
    };

    useEffect(() => {
        const stopDragging = () => setIsDraging(false);
        window.addEventListener("mouseup", stopDragging);
        return () => window.removeEventListener("mouseup", stopDragging);
    }, []);

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md text-white z-50 shadow-lg">

            {/* === MOBILE LAYOUT === */}
            <div className="md:hidden px-4 py-3 space-y-3">

                {/* Top row */}
                <div className="flex items-center justify-between">

                    {/* Track info */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 relative rounded-md overflow-hidden">
                            {currentTrack && (
                                <Image
                                    src={currentTrack.coverImageUrl}
                                    alt="cover"
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>

                        <div>
                            <p className="text-sm font-medium truncate max-w-[120px]">
                                {currentTrack?.title || "No track"}
                            </p>
                            <p className="text-xs text-gray-400">
                                {currentTrack?.artistName || "Unknown"}
                            </p>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-3">
                        <button onClick={prevTrack}><SkipBackIcon size={20} /></button>

                        <button onClick={() => currentTrack && playTrack(currentTrack)}>
                            {isPlaying ? <CirclePauseIcon size={28} /> : <CirclePlayIcon size={28} />}
                        </button>

                        <button onClick={nextTrack}><SkipForwardIcon size={20} /></button>
                    </div>
                </div>

                {/* Progress */}
                <div className="flex items-center gap-2 text-xs">
                    <span>{formatTime(currentTime)}</span>

                    <div
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        className="flex-1 h-[4px] bg-white/30 rounded cursor-pointer"
                    >
                        <div
                            className="h-full bg-yellow-400"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <span>{formatTime(duration)}</span>
                </div>
            </div>

            {/* === DESKTOP LAYOUT === */}
            <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between gap-6 p-4">

                {/* Left */}
                <div className="flex items-center gap-4 min-w-[200px]">
                    {currentTrack && (
                        <div className="w-14 h-14 relative rounded-full overflow-hidden">
                            <Image src={currentTrack.coverImageUrl} alt="" fill className="object-cover" />
                        </div>
                    )}

                    <div>
                        <h3 className="text-sm font-semibold">{currentTrack?.title || "No track"}</h3>
                        <p className="text-xs text-gray-400">{currentTrack?.artistName}</p>
                    </div>
                </div>

                {/* Center controls */}
                <div className="flex flex-col items-center gap-2 w-full max-w-[500px]">

                    <div className="flex items-center gap-4">
                        <button onClick={prevTrack}><SkipBackIcon size={20} /></button>

                        <button onClick={() => currentTrack && playTrack(currentTrack)}>
                            {isPlaying ? <CirclePauseIcon size={30} /> : <CirclePlayIcon size={30} />}
                        </button>

                        <button onClick={nextTrack}><SkipForwardIcon size={20} /></button>
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <span className="text-xs">{formatTime(currentTime)}</span>

                        <div
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            className="flex-1 h-[5px] bg-white/30 rounded cursor-pointer"
                        >
                            <div className="h-full bg-yellow-400" style={{ width: `${progress}%` }} />
                        </div>

                        <span className="text-xs">{formatTime(duration)}</span>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">

                    <button onClick={toggleQueue}>
                        <ListIcon size={20} />
                    </button>

                    <button onClick={toggleMute}>
                        {getVolumeIcon()}
                    </button>

                    <div
                        onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (e.clientX - rect.left) / rect.width;
                            volumeControl(percent);
                        }}
                        className="w-[100px] h-[5px] bg-white/30 rounded cursor-pointer"
                    >
                        <div
                            className="h-full bg-white"
                            style={{ width: `${volume * 100}%` }}
                        />
                    </div>

                    <Heart size={20} />
                    <ShoppingCart size={20} />
                </div>
            </div>
        </div>
    );
}