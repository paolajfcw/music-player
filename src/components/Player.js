import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faBackward,
  faForward,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../util";

const Player = ({
  audioRef,
  playing,
  setPlaying,
  songTime,
  currentSong,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  // States
  const [changeIcon, setChangeIcon] = useState(faPlayCircle);
  // useEffect
  useEffect(() => {
    const changedSongs = songs.map((targetSong) => {
      if (targetSong.id === currentSong.id) {
        return { ...targetSong, active: true };
      } else {
        return { ...targetSong, active: false };
      }
    });
    setSongs(changedSongs);
  }, [currentSong]);

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

  const skipSongHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    // console.log(currentIndex + 1);
    // console.log(songs.length);
    if (direction === "forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "backward") {
      if (currentIndex === 0) {
        currentIndex = songs.length;
        // console.log(songs[0]);
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    playAudio(playing, audioRef);
  };

  return (
    <div className="Player">
      <div className="time-control">
        <p>{formatTime(songTime.currentTime)}</p>
        <input
          min="0"
          max={songTime.duration || 0}
          value={songTime.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{formatTime(songTime.duration || 0)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipSongHandler("backward")}
          className="backward"
          size="2x"
          icon={faBackward}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="3x"
          icon={changeIcon}
        />
        <FontAwesomeIcon
          onClick={() => skipSongHandler("forward")}
          className="forward"
          size="2x"
          icon={faForward}
        />
      </div>
    </div>
  );
};

export default Player;
