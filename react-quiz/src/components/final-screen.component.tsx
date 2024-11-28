const FinalScreen = ({
  points,
  maxPoints,
}: {
  points: number
  maxPoints: number
}) => {
  const percentage = (points / maxPoints) * 100

  let emoji: string = ''

  if (percentage === 100) emoji = '🥇'
  if (percentage >= 80 && percentage < 100) emoji = '🥈'
  if (percentage >= 50 && percentage < 80) emoji = '🥉'
  if (percentage >= 50 && percentage < 80) emoji = '🤔'
  if (percentage === 0) emoji = '👎'

  return (
    <p className='result'>
      <span>{emoji}</span>
      You scored:<strong>{points}</strong> out of {maxPoints} (
      {Math.ceil(percentage)}%)
    </p>
  )
}
export default FinalScreen
