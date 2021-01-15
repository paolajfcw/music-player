import React from "react";

const LibrarySong = ({ song, setCurrentSong }) => {
  const selectSongHandler = () => {
    setCurrentSong(song);
  };

  return (
    <div onClick={selectSongHandler} className="LibrarySong">
      <img src={song.cover} alt={song.name} />
      <div className="SongDescription">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
