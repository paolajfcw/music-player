import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faBackward,
  faForward,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ audioRef, playing, setPlaying, songTime }) => {
  // States
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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const secondsWithZero = String(seconds).padStart(2, "0");
    return `${minutes}:${secondsWithZero}`;
  };

  const dragHandler = (e) => {
    // console.log(audioRef);
    audioRef.current.currentTime = e.target.value;
    // setSongTime({ ...songTime, currentTime: e.target.value });
  };

  return (
    <div className="Player">
      <div className="time-control">
        <p>{formatTime(songTime.currentTime)}</p>
        <input
          min="0"
          max={songTime.duration}
          value={songTime.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{formatTime(songTime.duration)}</p>
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
    </div>
  );
};

export default Player;
