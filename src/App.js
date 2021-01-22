import React, { useState, useRef } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import Data from "./Data";

import "./styles/App.scss";

function App() {
  // State
  const [songs, setSongs] = useState(Data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [playing, setPlaying] = useState(false);
  const [songTime, setSongTime] = useState({
    currentTime: "",
    duration: "",
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  // Reference
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    // console.log(e.target)/this was shorten below: currentTime: currentTime/ duration: duration
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongTime({ ...songTime, currentTime, duration });
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        playing={playing}
        setPlaying={setPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        songTime={songTime}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        playing={playing}
        audioRef={audioRef}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
