import { useState } from 'react';
import './App.css';
import StartQuiz from './components/StartQuiz';
import { QuizType } from './types/quiz';
import Quiz from './components/Quiz';

const URL = "https://opentdb.com/api.php?amount=10";

function App() {
  const [quiz, setQuiz] = useState<QuizType>();

  // step 1 fetch e set dello useState
  const startQuiz = () => {
    setQuiz(undefined);
    fetch(URL).then(res => res.json()).then(setQuiz);
  };

  return (
    <>
      <h1>Trivia Quiz</h1>
      {/* step 2 se il quiz non esiste lo startiamo altrimenti continuiamo, entrambi i componenti prendono la fetch */}
      {!quiz ? <StartQuiz onStart={startQuiz} /> : <Quiz quiz={quiz} nuovoQuiz={startQuiz} />}      
    </>
  )
}

export default App
