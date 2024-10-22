import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Drum from "./Drum.js";
import { MIDIProvider } from "@react-midi/hooks";

function App() {
  return (
    <div className="App">
      <MIDIProvider>
        <Drum />
      </MIDIProvider>
    </div>
  );
}

export default App;
