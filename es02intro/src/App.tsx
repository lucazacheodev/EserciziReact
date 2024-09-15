import { useEffect, useState } from 'react'
import './App.css'
import ComponenteLista from './components/ComponenteLista';


function App() {

  const [contatore, setContatore] = useState<number>(0);

  // useEffect è un hook che richiede come parametri una funzione e un array di dipendenze

  // array vuoto: la funzione viene eseguita una sola volta
  useEffect(() => {
    console.log('Creo il componente App');
  }, []);

  // array vuoto e return, il componente viene distrutto
  useEffect(() => {
    return () => {
      console.log('Distruggo il componente App');
    }
  }, []);

  // array con variabile: la funzione viene eseguita al variare della variabile
  useEffect(() => {
    console.log('Hai cliccato il contatore');
  }, [contatore]);

  return (
    <>
      <h2> Esercitazione </h2>
      <p>Contatore cliccato {contatore} volte</p>
      <button onClick={() => setContatore(contatore + 1)}> Incrementa </button>
      <hr />
      {contatore % 2 == 0 && <ComponenteLista />}
    </>
    // se il contatore è pari viene creato componente lista
    // se il contatore è dispari viene distrutto
  )
}

export default App
