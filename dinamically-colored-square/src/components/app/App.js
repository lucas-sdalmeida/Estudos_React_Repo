import './App.css';
import Square from '../square/Square';
import ColorForm from "../colorform/ColorForm"

import { useState } from "react";

function App() {
  const [squareColor, setSquareColor] = useState("");
  const [hexValue, setHexValue] = useState("");

  return (
    <div className="App">
      <Square 
        squareColor={ squareColor }
        hexValue={ hexValue }
      />
      <ColorForm 
        setColor={ setSquareColor }
        setHexValue={ setHexValue }
      />
    </div>
  );
}

export default App;
