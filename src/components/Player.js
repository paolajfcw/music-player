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
  // States
  const [changeIcon, setChangeIcon] = useState(faPlayCircle);
  const [songTime, setSongTime] = useState({
    currentTime: null,
    duration: null,
  });
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

  const timeUpdateHandler = (e) => {
    // console.log(e.target)/this was shorten below: currentTime: currentTime/ duration: duration
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongTime({ ...songTime, currentTime, duration });
  };

  const formatTime = (time) => {
    const minute = Math.floor(time / 60);
    const second = Math.floor(time % 60);

    if (second < 10) {
      return `${minute}:0${second}`;
    } else {
      return `${minute}:${second}`;
    }
  };

  return (
    <div className="Player">
      <div className="time-control">
        <p>{formatTime(songTime.currentTime)}</p>
        <input type="range" />
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
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
