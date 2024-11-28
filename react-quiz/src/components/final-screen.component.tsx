import type { Action } from '../types'

const FinalScreen = ({
  points,
  maxPoints,
  highscore,
  dispatch,
}: {
  points: number
  maxPoints: number
  highscore: number
  dispatch: React.Dispatch<Action>
}) => {
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

      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'reset' })}
      >
        Restart
      </button>
    </>
  )
}
export default FinalScreen
