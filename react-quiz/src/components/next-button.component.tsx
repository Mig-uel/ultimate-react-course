import { useQuizContext } from '../context/QuizContext'

const NextButton = () => {
  const { answer, finishQuiz, index, nextQuestion, numOfQuestions } =
    useQuizContext()

  if (answer === null) return null

  if (index < numOfQuestions - 1)
    return (
      <button className='btn btn-ui' onClick={nextQuestion}>
        Next
      </button>
    )

  if (index === numOfQuestions - 1)
    return (
      <button className='btn btn-ui' onClick={finishQuiz}>
        Finish
      </button>
    )
}
export default NextButton
