import { useQuizContext } from '../context/QuizContext'

const StartScreen = () => {
  const { numOfQuestions, startQuiz } = useQuizContext()

  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numOfQuestions} questions to test your React mastery</h3>

      <button className='btn btn-ui' onClick={startQuiz}>
        Let's Start!
      </button>
    </div>
  )
}
export default StartScreen
