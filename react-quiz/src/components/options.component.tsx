import type { Action, Question } from '../types'

const Options = ({
  question,
  dispatch,
  answer,
}: {
  question: Question
  dispatch: React.Dispatch<Action>
  answer: number | null
}) => {
  console.log(question)
  console.log(answer)

  const isAnswered = answer !== null

  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            isAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          disabled={isAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
export default Options
