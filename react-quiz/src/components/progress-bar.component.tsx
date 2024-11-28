const ProgressBar = ({
  index,
  numOfQuestions,
}: {
  index: number
  numOfQuestions: number
}) => {
  return (
    <header className='progress'>
      <p>
        Question <strong>{index}</strong> / {numOfQuestions}
      </p>
    </header>
  )
}
export default ProgressBar
