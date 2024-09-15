import { useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState<number>(20);

  function BackgroundColor(temp: number) {
    return temp >= 15 ? "orange" : "lightblue";
  }

  return (
    <>
      <h2>Temperatura</h2>
      <div style={{ backgroundColor: BackgroundColor(temp), padding: "5px" }}>
        <h2>{temp}°</h2>
        <button
          style={{ backgroundColor: "lightgreen", margin: "2px" }}
          onClick={() => setTemp(temp + 1)}
        >
          +1
        </button>
        <button
          style={{ backgroundColor: "lightgreen", margin: "2px" }}
          onClick={() => setTemp(temp - 1)}
        >
          -1
        </button>
      </div>
    </>
  );
}

export default App;
