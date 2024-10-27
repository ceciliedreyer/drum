import { React, useState } from "react";
import { soundBank1, soundBank2 } from "./Sounds";
import "./Drum.css";

export default function Drum() {
  const [Power, setPower] = useState(true);
  const [Bank, setBank] = useState(true); // true for soundBank1
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0.5);

  return (
    <div className="Drum">
      <div className="wrapper">
        <div clasName="pad-grid">
          {sounds.map(function (sounds) {
            return (
              <button
                className="btn btn-primary shadow-sm p-3 m-1 rounded drum-pad"
                key={sounds.key}
              >
                {sounds.key}
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
            />
          </div>
          <div className="btn btn-primary sound">Pad-Title</div>
          <input
            type="range"
            className="form-range volume-slider"
            id="customRange1"
          />
          <h1 className="bank-switch">BANK</h1>
          <div className="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
