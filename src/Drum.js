import React from "react";
import "./Drum.css";

export default function Drum() {
  /**
   * find a music api
   * The toggle is set to drums
   * if the toggle is = drums I return:
   *   Once I hit a button a pre-set sound is called
   * Once the toggle switches I update the state to piano
   * if the toggle is = piano I return:
   *   once I hit a button I call the API and get the piano sounds
   */

  return (
    <div className="Drum">
      <div className="wrapper">
        <div className="pad-bank">
          <div className="row">
            <div clasName="col">
              <button className="btn btn-primary shadow-sm p-3 m-1 rounded drum-pad ">
                Q
              </button>

              <button className="btn btn-primary shadow-sm p-3 m-1 rounded drum-pad">
                W
              </button>
              <button className="btn btn-primary shadow-sm p-3 m-1 rounded drum-pad">
                E
              </button>
            </div>
            <div clasName="col">
              <button className="btn btn-primary shadow-sm p-3 m-1 rounded drum-pad ">
                A
              </button>

              <button className="btn btn-primary shadow-sm p-3 m-1 rounded drum-pad">
                S
              </button>
              <button className="btn btn-primary shadow-sm p-3 m-1 rounded drum-pad">
                D
              </button>
            </div>
            <div clasName="col">
              <button className="btn btn-primary shadow-sm p-3 m-1 rounded drum-pad ">
                Z
              </button>

              <button className="btn btn-primary shadow-sm p-3 m-1 rounded drum-pad">
                X
              </button>
              <button className="btn btn-primary shadow-sm p-3 m-1 rounded drum-pad">
                C
              </button>
            </div>
          </div>
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
