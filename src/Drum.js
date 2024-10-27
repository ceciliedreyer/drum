import React from "react";
import "./Drum.css";

export default function Drum() {
  /**
   * find a music library
   * The toggle is set to drums
   * if the toggle is = drums I return:
   *   Once I hit a button a pre-set sound is called
   * Once the toggle switches I update the state to piano
   */

  return (
    <div className="Drum">
      <div className="wrapper">
        <div clasName="pad-grid">
          <button className="btn btn-primary shadow-sm p-3 m-1 rounded drum-pad">
            Q
          </button>
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
