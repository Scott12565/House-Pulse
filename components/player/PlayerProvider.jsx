'use client'
import { createContext, useState, useRef, useContext } from 'react';

// Create context
const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {

    // states
    const [currentTrack, setCurrentTrack] = useState(null);
    const [queue, setQueue] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1); // 0 to 1
    const [isMuted, setIsMuted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const audioRef = useRef(null);

    // Functions

    // Play Track
    const playTrack = (track) => {
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

    // Go to the previouse song
    // Go to the next song

    // Seeking within the current song

    // Toggling the volume

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

            // functions
            playTrack
        }} >
            <audio ref={audioRef} />
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayer = () => useContext(PlayerContext)

export default PlayerProvider;

