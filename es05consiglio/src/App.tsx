import { useState } from "react";
import { Advice } from "./types/Advice";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [advice, setAdvice] = useState<Advice>();
  const url = "https://api.adviceslip.com/advice";
  const getAdvice = () => {
    fetch(url, { cache: "reload" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAdvice(data);
      });
  };
  return (
    <>
      <div className="text-center">
        <p> {advice?.slip.advice}</p>
        <button onClick={getAdvice} className="btn btn-primary">
          OTTIENI UN CONSIGLIO
        </button>
      </div>
    </>
  );
}

export default App;
