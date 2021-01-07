import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Data from "./Data";

import "./styles/App.scss";

function App() {
  // State
  const [songs, setSongs] = useState(Data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        playing={playing}
        setPlaying={setPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
