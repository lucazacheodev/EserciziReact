import { useEffect, useState } from "react"
import { Question } from "../types/quiz"

interface Props {
  domanda: Question
  avanti: (risposta: string) => void
}

// mischia le risposte per non avere in ordine le incorrette e poi le corrette
// bastava ordinare in ordine alfabetico (possibiliRisposte.sort)
function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// domanda prende in input un tipo "Question" e una funzione "avanti" che a sua volta prende in input una stringa "risposta"
function Domanda({ domanda, avanti }: Props) {
// crea useState array di stringhe "risposte"
  const [risposte, setRisposte] = useState<Array<string>>([]);
// crea useState di stringa "risposta selezionata"
  const [rispostaSelezionata, setRispostaSelezionata] = useState<string>("");
// setta la risposta selezionata prendendola in input dalla risposta multipla/booleana
  const selezionaRisposta = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setRispostaSelezionata(e.currentTarget.value);
  }
// crea array possibili risposte prendendo dal json tutte quelle incorrette e quella corretta
// mischia le risposte
// setta nello useState
// questo viene fatto ad ogni cambio di domanda [domanda]
  useEffect(() => {
    setRispostaSelezionata("");
    const possibiliRisposte = [...domanda.incorrect_answers, domanda.correct_answer];
    shuffleArray(possibiliRisposte);
    setRisposte(possibiliRisposte);
  }, [domanda]);
// ritorna un div con paragrafo col testo della domanda, un input radio per ogni risposta possibile, un button disabilitato finchè non si sceglie una risposta
// input radio onChange prende l'input e cambia lo useState delle risposte selezionate
// button on click richiama la funzione avanti passando la risposta selezionata
// funzione avanti setta la risposta data nell'array di risposte date e aumenta il counter delle domande
  return (
    <div>
      <p>Domanda: {domanda.question}</p>
      <hr />
      {risposte.map(risp => (
        <div key={risp}>
          <label htmlFor={risp}>
            <input
              type="radio"
              id={risp}
              name={domanda.question}
              value={risp}
              checked={risp === rispostaSelezionata}
              onChange={selezionaRisposta} />
            {risp}
          </label>
        </div>
      ))}
      <hr />
      <button disabled={!rispostaSelezionata} onClick={() => avanti(rispostaSelezionata)}>Avanti</button>
    </div>
  )
}


export default Domanda