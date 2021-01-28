import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  song,
  setCurrentSong,
  playing,
  audioRef,
  id,
  setSongs,
  songs,
}) => {
  const selectSongHandler = () => {
    setCurrentSong(song);
    // Add Active state
    const changedSongs = songs.map((targetSong) => {
      if (targetSong.id === id) {
        return { ...targetSong, active: true };
      } else {
        return { ...targetSong, active: false };
      }
    });
    setSongs(changedSongs);
    // Check if the song is playing
    playAudio(playing, audioRef);
  };

  return (
    <div
      onClick={selectSongHandler}
      className={`LibrarySong ${song.active ? "playingMode" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="SongDescription">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
