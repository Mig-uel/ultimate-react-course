import type { Action } from '../types'

const NextButton = ({
  dispatch,
  answer,
}: {
  dispatch: React.Dispatch<Action>
  answer: number | null
}) => {
  if (answer === null) return null

  return (
    <button
      className='btn btn-ui'
      onClick={() => dispatch({ type: 'nextQuestion' })}
    >
      Next
    </button>
  )
}
export default NextButton
