import { useState } from "react";
import { QuizType } from "../types/quiz";
import Domanda from "./Domanda";
import Risultati from "./Risultati";

interface Props {
  quiz: QuizType
  nuovoQuiz: () => void
}

// questa funzione prende in input un "QuizType" ovvero il risultato della fetch e una funzione (la fetch)

function Quiz({ quiz, nuovoQuiz }: Props) {
// la domanda corrente è la numero 0 dell'array
  const [domandaCorrente, setDomandaCorrente] = useState<number>(0);
// creo un array per tenere traccia delle risposte
  const [risposte, setRisposte] = useState<Array<string>>([]);
// questa funzione aggiunge all'array delle risposte la risposta fornita ed aumenta il counter di 1 per procedere alla domanda successiva
  const avanti = (rispostaFornita: string) => {
    console.log("risposta fornita", rispostaFornita);
    setRisposte([...risposte, rispostaFornita]);
    setDomandaCorrente(domandaCorrente + 1);
  };
 
// ritorno un div con domanda n° e un componente <Domanda> se ci sono ancora domande nell'array di domandde passato alla funzione Quiz
// ritorno <Risultati> se le domande sono finite
  return (
    <div className="card">

      {domandaCorrente < quiz.results.length && (
        <div>
          <p>Domanda n° {domandaCorrente + 1}/{quiz.results.length}</p>
          <Domanda domanda={quiz.results[domandaCorrente]} avanti={avanti} />
        </div>
      )}

      {domandaCorrente == quiz.results.length && (
        <Risultati domande={quiz.results} risposte={risposte} nuovoQuiz={nuovoQuiz} />
      )}
    </div>
  )

}

export default Quiz;