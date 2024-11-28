import type { Action } from '../types'

const NextButton = ({
  dispatch,
  answer,
  index,
  numOfQuestions,
}: {
  dispatch: React.Dispatch<Action>
  answer: number | null
  index: number
  numOfQuestions: number
}) => {
  if (answer === null) return null

  if (index < numOfQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    )

  if (index === numOfQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finish
      </button>
    )
}
export default NextButton
