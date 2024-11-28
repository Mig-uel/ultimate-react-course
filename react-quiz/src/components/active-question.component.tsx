import Options from './options.component'

import type { Question } from '../types'

const ActiveQuestion = ({ question }: { question: Question }) => {
  console.log(question)

  return (
    <div>
      <h4>{question.question}</h4>

      <Options question={question} />
    </div>
  )
}
export default ActiveQuestion
