import { useMemo } from "react";
import { Question } from "../types/quiz";

interface Props {
  domande: Array<Question>
  risposte: Array<string>
  nuovoQuiz: () => void
}

// funzione risultati viene chiamata quando il quiz è finito, prende in input un array di domande , un array di stringhe (risposte) e la funzione nuovoQuiz
function Risultati({ domande, risposte, nuovoQuiz }: Props) {
// funzione che filtra le risposte esatte prendendo domanda.correct_answer e paragonandola alla risposta data dall'utente. Per ogni <Question> dell'array domande
// salva il risultato in numerRisposteEsatte:number
  const numeroRisposteEsatte : number = useMemo(() => {
    return domande.filter((domanda, i) => domanda.correct_answer === risposte[i]).length;
  }, [domande, risposte]);
// ritorna un messaggio con una ternaria in base al punteggio raggiunto
// e un pulsante che inizia un nuovo quiz
  return (
    <div>
      <p>Risultati {numeroRisposteEsatte} / {domande.length}</p>
      <p>{numeroRisposteEsatte <6 ? "Ritenta" : "Hai Vinto"}</p>
      <button onClick={nuovoQuiz}>RIPROVA</button>
    </div>
  )
}


export default Risultati