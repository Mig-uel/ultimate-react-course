import Options from './options.component'

import type { Action, Question } from '../types'

const ActiveQuestion = ({
  question,
  dispatch,
  answer,
}: {
  question: Question
  dispatch: React.Dispatch<Action>
  answer: number | null
}) => {
  return (
    <div>
      <h4>{question.question}</h4>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  )
}
export default ActiveQuestion
