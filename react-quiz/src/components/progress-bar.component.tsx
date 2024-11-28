const ProgressBar = ({
  index,
  numOfQuestions,
  points,
  maxPoints,
  answer,
}: {
  index: number
  numOfQuestions: number
  points: number
  maxPoints: number
  answer: number | null
}) => {
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
