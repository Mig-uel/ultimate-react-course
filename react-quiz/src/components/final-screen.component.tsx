const FinalScreen = ({
  points,
  maxPoints,
}: {
  points: number
  maxPoints: number
}) => {
  const percentage = (points / maxPoints) * 100

  return (
    <p>
      You scored:<strong>{points}</strong> out of {maxPoints} (
      {Math.ceil(percentage)}%)
    </p>
  )
}
export default FinalScreen
