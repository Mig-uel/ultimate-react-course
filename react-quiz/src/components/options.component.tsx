import { useQuizContext } from '../context/QuizContext'

const Options = () => {
  const { answer, chooseAnswer, index, questions } = useQuizContext()
  const question = questions[index]

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
          onClick={() => chooseAnswer(index)}
          disabled={isAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
export default Options
