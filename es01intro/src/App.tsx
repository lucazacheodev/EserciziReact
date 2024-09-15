import { useState } from 'react'
import './App.css'

// creazione interfaccia Props
interface Props {
  nome: string
  cognome: string
  // ? = facoltativo
  eta?: number
}

// creazione funzione Persona che accetta un props di tipo Props e ritorna HTML elements
function Persona(props: Props) {
  return (
    <>
      <span>Questo è un componente "Persona". </span>
      <span>{props.nome} {props.cognome}</span>
      {props.eta && <span> {props.eta} anni</span>}
      <br />
    </>
    // check: se età (facoltativo) esiste e non è vuoto, crea lo span
  )
}

// counter classico non si aggiorna, anche se nel console.log la x viene incrementata 
function CounterSenzaState() {
  let x = 0;
  function incrementa() {
    x++;
    console.log("x =", x);
  }

  return (
    <>
      <p>SENZA STATE Sono stato cliccato {x} volte. (si aggiorna la x nel console.log)</p>
      <input type='button' value="Incrementa" onClick={incrementa} />
    </>
  )
}

// serve lo state per aggiornare (solo la parte della pagina con lo state)
function CounterConState() {
  const [x, setX] = useState(0);
  function incrementa() {
    setX(x + 1);
  }
  return (
    <>
      <p> CON STATE Sono stato cliccato {x} volte. (si aggiorna la x nel paragrafo)</p>
      <input type='button' value="Incrementa" onClick={incrementa} />
    </>
  )
}

// creazione interfaccia User
interface User {
  firstName: string
  lastName: string
  yearsOld: number
}

//creo funzione formatName che accetta uno user di tipo User e ritorna user.nome user.cognome
function formatName(user: User) {
  return user.firstName + " " + user.lastName;
}

// il return di questa funzione App() appare sul DOM
function App() {
  // creo costante user di tipo User
  const user: User = {
    firstName: "Luca",
    lastName: "Zacheo",
    yearsOld: 29
  }

  // creo elemento di nome element
  // richiamo formatName passando user e creo h1 con nome e congome
  // paragrafo con ternaria per stampare "sei maggiorenne" o "sei minorenne"

  const element = (
    <div>
      <h1>Ciao {formatName(user)}!</h1>
      <p>
        {
          user.yearsOld >= 18 ?
            "Sei maggiorenne" :
            "Sei minorenne"
        }
      </p>
    </div>
  );

  // ritorno element, Persona(con parametri) x2, CounterSenzaState, CounterConState, appare sul DOM

  return (
    <>
      {element}
      <Persona nome="Luca" cognome="Zacheo" eta={29} />
      <Persona nome="Luca" cognome="Zacheo" />
      <CounterSenzaState />
      <CounterConState />
    </>
  )
}

export default App
