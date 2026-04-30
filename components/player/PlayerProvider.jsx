'use client'
import { createContext, useState, useRef, useContext } from 'react';

// Create context
const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {

    // states
    const [currentTrack, setCurrentTrack] = useState(null);
    const [queue, setQueue] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1); // 0 to 1
    const [isMuted, setIsMuted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isQueueOpen, setIsQueueOpen] = useState(false);

    const audioRef = useRef(null);

    // Functions
    // toogle queue
    const toggleQueue = () => {
        setIsQueueOpen(prev => !prev);
    };
    // Play Track
    const playTrack = (track, tracks = queue) => {
        if(!audioRef.current) return;

        // Play or pause the current playing song
        if(currentTrack?._id === track._id){
            if(isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }

            return;
        }

        // find the index of the track in the list
        const index = tracks.findIndex(t => t._id === track._id);

        setQueue(tracks);
        setCurrentIndex(index);

        // If its a new track => load it and play
        // set current track to be the track
        setIsLoading(true);
        setCurrentTrack(track);

        // set the audio src to be the current track
        audioRef.current.src = track.audioFileUrl
        audioRef.current.load();

        // Play the track
        audioRef.current
        .play()
        .then(() => {
            // set the is playing to true
            setIsPlaying(true);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error('Error playing track:', error);
            setIsLoading(false);
        })
        
    }

    // Go to the next song
    const nextTrack = () => {
        if (!queue.length || !audioRef.current) return;

        const nextIndex = (currentIndex + 1) % queue.length;
        const next = queue[nextIndex];

        setCurrentIndex(nextIndex);
        setCurrentTrack(next);

        audioRef.current.src = next.audioFileUrl;
        audioRef.current.load();

        audioRef.current.play();
        setIsPlaying(true);
    };
    
    // Go to the previouse song
    const prevTrack = () => {
        if (!queue.length || !audioRef.current) return;

        const prevIndex =
            currentIndex === 0 ? queue.length - 1 : currentIndex - 1;

        const prev = queue[prevIndex];

        setCurrentIndex(prevIndex);
        setCurrentTrack(prev);

        audioRef.current.src = prev.audioFileUrl;
        audioRef.current.load();

        audioRef.current.play();
        setIsPlaying(true);
    };

    // Toggling the volume
    const volumeControl = (value) => {
        if(!audioRef.current) return;

        // set the volume to be the value
        audioRef.current.volume = value;
        setVolume(value);

        // if the value is greater than 0 then set muted to false
        if(value > 0){
            setIsMuted(false);
        }
    }

    // Toggling mute
    const toggleMute = () => {
        if(!audioRef.current) return;

        const newMuted = !isMuted;
        audioRef.current.muted = newMuted
        setIsMuted(newMuted);
    }

    return (
        <PlayerContext.Provider value={{
            // states
            currentTrack,
            isPlaying,
            currentTime,
            duration,
            audioRef,
            volume,
            isMuted,
            isLoading,
            queue,
            isQueueOpen,

            // functions
            playTrack,
            nextTrack,
            prevTrack,
            volumeControl,
            toggleMute,
            toggleQueue,
        }} >
            <audio ref={audioRef}
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onLoadedMetadata={() => setDuration(audioRef.current.duration)}
                onEnded={nextTrack}
            />
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayer = () => useContext(PlayerContext)

export default PlayerProvider;

