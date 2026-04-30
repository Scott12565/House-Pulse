'use client';

import { usePlayer } from "./PlayerProvider";
import Image from "next/image";
import { X } from "lucide-react";

export default function QueueDrawer() {
    const { queue, currentTrack, playTrack, isQueueOpen, toggleQueue } = usePlayer();

    return (
        <>
            {/* Overlay */}
            {isQueueOpen && (
                <div
                    onClick={toggleQueue}
                    className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
                />
            )}

            {/* Drawer */}
            <div
                className={`
                    fixed z-50 bg-gray-900 text-white backdrop-blur-sm shadow-2xl transition-transform duration-300

                    /* Mobile (bottom drawer) */
                    bottom-0 right-0 w-full h-[75vh] rounded-t-2xl

                    /* Desktop (side drawer) */
                    md:top-0 md:right-0 md:h-full md:w-[380px] md:rounded-none

                    /* Animation */
                    ${isQueueOpen
                        ? "translate-y-0 md:translate-x-0"
                        : "translate-y-full md:translate-x-full"
                    }
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <h2 className="text-lg font-semibold">Up Next</h2>

                    <button onClick={toggleQueue} className="hover:scale-110 transition">
                        <X />
                    </button>
                </div>

                {/* List */}
                <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-70px)]">

                    {(!queue || queue.length === 0) && (
                        <p className="text-gray-400 text-sm text-center">
                            No tracks in queue
                        </p>
                    )}

                    {queue?.map((track) => {
                        const isActive = track._id === currentTrack?._id;

                        return (
                            <div
                                key={track._id}
                                onClick={() => playTrack(track, queue)}
                                className={`
                                    flex items-center gap-3 p-2 rounded-lg cursor-pointer transition
                                    ${isActive
                                        ? "bg-cyan-500/20"
                                        : "hover:bg-white/10"
                                    }
                                `}
                            >
                                {/* Cover */}
                                <div className="w-10 h-10 relative rounded-md overflow-hidden">
                                    <Image
                                        src={track.coverImageUrl}
                                        alt={track.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <p className="text-sm font-medium truncate">
                                        {track.title}
                                    </p>
                                    <p className="text-xs text-gray-400 truncate">
                                        {track.artistName}
                                    </p>
                                </div>

                                {/* Playing indicator */}
                                {isActive && (
                                    <span className="text-xs text-cyan-400">
                                        Playing
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}