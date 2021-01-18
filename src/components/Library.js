import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, playing, audioRef, setSongs }) => {
  return (
    <div className="Library">
      <h2>Library</h2>
      <div className="Library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            playing={playing}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            songs={songs}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
