import { useQuizContext } from '../context/QuizContext'

const ProgressBar = () => {
  const { answer, index, maxPoints, numOfQuestions, points } = useQuizContext()

  return (
    <header className='progress'>
      <progress
        max={numOfQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>

      <p>
        <strong>
          {points} / {maxPoints}
        </strong>
      </p>
    </header>
  )
}
export default ProgressBar
