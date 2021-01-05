import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faBackward,
  faForward,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="Player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="backward" size="2x" icon={faBackward} />
        <FontAwesomeIcon className="play" size="3x" icon={faPlayCircle} />
        <FontAwesomeIcon className="forward" size="2x" icon={faForward} />
      </div>
    </div>
  );
};

export default Player;
