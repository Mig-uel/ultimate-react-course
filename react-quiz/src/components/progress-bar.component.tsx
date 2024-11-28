const ProgressBar = ({
  index,
  numOfQuestions,
  points,
  maxPoints,
}: {
  index: number
  numOfQuestions: number
  points: number
  maxPoints: number
}) => {
  return (
    <header className='progress'>
      <p>
        Question <strong>{index}</strong> / {numOfQuestions}
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
