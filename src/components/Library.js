import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, playing, audioRef, currentSong }) => {
  return (
    <div className="Library">
      <h2>Library</h2>
      <div className="Library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
            playing={playing}
            key={song.id}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
