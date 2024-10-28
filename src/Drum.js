import { React, useState, useEffect, useCallback } from "react";
import { soundBank1, soundBank2 } from "./Sounds";
import "./Drum.css";

export default function Drum() {
  const [power, setPower] = useState(false);
  const [bank, setBank] = useState(true); // true for soundBank1
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0.5);

  let currentSounds;
  if (bank === true) {
    currentSounds = soundBank1;
  } else {
    currentSounds = soundBank2;
  }

  function handleBank() {
    if (bank === true) {
      setBank(false);
      setDisplay("bank 1");
    } else {
      setBank(true);
      setDisplay("bank 2");
    }
  }

  function handlePower() {
    setPower(!power);

    if (power === true) {
      setDisplay("ON");
    } else {
      setDisplay("");
    }
  }

  function handleVolume(volume) {
    setVolume(volume.target.value);
    setDisplay(`volume: ${volume.target.value * 100}`);
  }

  const startDrum = useCallback(
    (sound, label) => {
      if (power === true) {
        const audio = new Audio(sound);
        audio.volume = volume;
        audio.play();
        setDisplay(label);
      }
    },
    [power, volume]
  );

  useEffect(() => {
    function handleKeyDown(event) {
      const key = event.key.toUpperCase();
      const sound = currentSounds.find((s) => s.key === key);
      if (sound) {
        startDrum(sound.sound, sound.label);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSounds, startDrum]);

  return (
    <div className="Drum">
      <div className="wrapper">
        <div clasName="pad-grid">
          {currentSounds.map(function (sounds) {
            return (
              <button
                className="btn btn-primary shadow-sm p-3 m-1 rounded drum-pad"
                onClick={function () {
                  startDrum(sounds.sound, sounds.label);
                }}
                key={sounds.key}
                sound={sounds.sound}
                label={sounds.label}
              >
                {sounds.key}
                <audio id={sounds.key} src={sounds.sound} className="clip" />
              </button>
            );
          })}
        </div>
        <div className="controls">
          <h1 className="power-switch">POWER</h1>
          <div className="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={handlePower}
            />
          </div>
          <div className="btn btn-primary sound">{display}</div>
          <input
            type="range"
            className="form-range volume-slider"
            id="customRange1"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolume}
          />
          <h1 className="bank-switch">BANK</h1>
          <div className="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={handleBank}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
