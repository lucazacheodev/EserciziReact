interface Props {
    onStart: () => void
  }
   // prende in input la fetch che setta lo usestate del quiz (che parte come undefined)
  function StartQuiz({ onStart }: Props) {
    return (
      <div className="card">
        <p>Premi il pulsante per iniziare un nuovo quiz</p>
        <button onClick={onStart}>Start Quiz</button>
      </div>
    )
  }
  
  export default StartQuiz