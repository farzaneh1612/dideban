"use client";

import { createContext, useEffect, useRef, useState } from "react";

import Player from "@/components/Player";

export const PlayerContext = createContext();

function PlayerContextProvider({ children }) {
  const audioPlayerRef = useRef();
  const [trackList, setTrackList] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(30);

  const setTrack = ({ current, trackList }) => {
    const audioPlayer = audioPlayerRef?.current;
    setCurrentTrack(current);
    setTrackList(trackList);
    audioPlayer.src = current?.media?.path || current?.track?.media?.path;
    audioPlayer.load();
  };

  const playOrPause = async () => {
    const audioPlayer = audioPlayerRef?.current;
    if (audioPlayer.paused) {
      setIsLoading(true);
      await audioPlayer.play();
      setIsLoading(false);
      setIsPlaying(true);
    } else {
      audioPlayer.pause();
      setIsPlaying(false);
    }
  };

  const handleDuration = () => {
    const seconds = Math.floor(audioPlayerRef?.current?.duration);
    setDuration(seconds);
  };

  useEffect(() => {
    handleDuration();
  }, [
    audioPlayerRef?.current?.loadedmetadata,
    audioPlayerRef?.current?.readyState,
  ]);

  useEffect(() => {
    if (audioPlayerRef?.current) {
      audioPlayerRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <PlayerContext.Provider
      value={{
        trackList,
        currentTrack,
        setTrack,
        isPlaying,
        playOrPause,
        isLoading,
        duration,
        volume,
        setVolume,
      }}
    >
      {children}

      <Player ref={audioPlayerRef} />
    </PlayerContext.Provider>
  );
}

export default PlayerContextProvider;
