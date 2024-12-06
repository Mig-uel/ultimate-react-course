import { useQuizContext } from '../context/QuizContext'

const FinalScreen = () => {
  const { highscore, maxPoints, points, resetQuiz } = useQuizContext()

  const percentage = (points / maxPoints) * 100

  let emoji: string = ''

  if (percentage === 100) emoji = '🥇'
  if (percentage >= 80 && percentage < 100) emoji = '🥈'
  if (percentage >= 50 && percentage < 80) emoji = '🥉'
  if (percentage >= 50 && percentage < 80) emoji = '🤔'
  if (percentage === 0) emoji = '👎'

  return (
    <>
      <p className='result'>
        <span>{emoji}</span>
        You scored:<strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>

      <p className='highscore'>(⭐ High Score: {highscore} points)</p>

      <button className='btn btn-ui' onClick={resetQuiz}>
        Restart
      </button>
    </>
  )
}
export default FinalScreen
