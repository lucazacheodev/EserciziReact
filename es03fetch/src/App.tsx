import { useState } from "react";
import "./App.css";
import CardUtente from "./components/CardUtente";
import { Utente } from "./types/Utente";

function App() {
  const [utenti, setUtenti] = useState<Array<Utente>>([]);

  const url = "https://jsonplaceholder.typicode.com/users";
  const getUtenti = () => {
    console.log("fetch here");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUtenti(data);
      });
  };

  return (
    <>
      <button onClick={getUtenti}>Get Utenti</button>
      Numero utenti: {utenti.length}
      {utenti.map((utente) => (
        <CardUtente
          key={utente.id}
          nome={utente.name}
          email={utente.email}
          azienda={utente.company.name}
        />
      ))}
    </>
  );
}

export default App;
