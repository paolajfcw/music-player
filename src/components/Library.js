import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong }) => {
  return (
    <div className="Library">
      <h2>Library</h2>
      <div className="Library-songs">
        {songs.map((song) => (
          <LibrarySong song={song} setCurrentSong={setCurrentSong} />
        ))}
      </div>
    </div>
  );
};
export default Library;
