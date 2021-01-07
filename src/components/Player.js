import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faBackward,
  faForward,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, playing, setPlaying }) => {
  // Reference
  const audioRef = useRef(null);
  const [changeIcon, setChangeIcon] = useState(faPlayCircle);
  // Event handlers
  const playSongHandler = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      setChangeIcon(faPlayCircle);
    } else {
      audioRef.current.play();
      setPlaying(true);
      setChangeIcon(faPauseCircle);
    }
  };

  return (
    <div className="Player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="backward" size="2x" icon={faBackward} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="3x"
          icon={changeIcon}
        />
        <FontAwesomeIcon className="forward" size="2x" icon={faForward} />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
