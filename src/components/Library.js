import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, setPlaying }) => {
  return (
    <div className="Library">
      <h2>Library</h2>
      <div className="Library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            setPlaying={setPlaying}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
