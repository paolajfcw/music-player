import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="Song">
      <img src={currentSong.cover} alt="cover" />
      <h1>{currentSong.name}</h1>
      <h2>{currentSong.artist}</h2>
    </div>
  );
};

export default Song;
