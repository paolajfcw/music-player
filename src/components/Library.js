import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  playing,
  audioRef,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`Library ${libraryStatus ? "activeLibrary" : ""}`}>
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
      <small>
        <a
          href="https://github.com/paolajfcw/music-player"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Jhoselyn Farfan
      </small>
    </div>
  );
};
export default Library;
