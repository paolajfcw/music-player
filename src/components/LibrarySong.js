import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  playing,
  audioRef,
  currentSong,
}) => {
  const selectSongHandler = () => {
    setCurrentSong(song);
    // Add Active state
    // if (currentSong.id === song.id) {
    //   return { ...song, active: true };
    // } else {
    //   return { ...song, active: false };
    // }
    // Check if the song is playing
    if (playing) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
    // setSongs(
    //   songs.map((targetSong) => {
    //     return {
    //       ...targetSong,
    //       active: targetSong.id === song.id,
    //     };
    //   })
    // );
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
