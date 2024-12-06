import Options from './options.component'
import { useQuizContext } from '../context/QuizContext'

const ActiveQuestion = () => {
  const { index, questions } = useQuizContext()
  const question = questions[index]

  return (
    <div>
      <h4>{question.question}</h4>

      <Options />
    </div>
  )
}
export default ActiveQuestion
