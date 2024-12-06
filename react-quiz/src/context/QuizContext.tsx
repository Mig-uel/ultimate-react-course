import { createContext, useContext, useEffect, useReducer } from 'react'
import { initialState, reducer } from '../reducers/quizReducer'
import type { Question, QuizCTX } from '../types'

const QuizContext = createContext<QuizCTX>({
  answer: null,
  error: null,
  highscore: 0,
  index: 0,
  points: 0,
  questions: [],
  secondsRemaining: null,
  status: 'loading',
  maxPoints: 0,
  numOfQuestions: 0,
  startQuiz: () => {},
  chooseAnswer: () => {},
  resetQuiz: () => {},
  nextQuestion: () => {},
  finishQuiz: () => {},
  startTimer: () => {},
})

const QuizContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {
    error,
    questions,
    status,
    index,
    answer,
    points,
    highscore,
    secondsRemaining,
  } = state

  const numOfQuestions = questions.length
  const maxPoints = questions.reduce((acc, curr) => acc + curr.points, 0)

  const startQuiz = () => dispatch({ type: 'start' })
  const chooseAnswer = (index: number) =>
    dispatch({ type: 'newAnswer', payload: index })
  const resetQuiz = () => dispatch({ type: 'reset' })
  const nextQuestion = () => dispatch({ type: 'nextQuestion' })
  const finishQuiz = () => dispatch({ type: 'finish' })
  const startTimer = () => dispatch({ type: 'tick' })

  const value: QuizCTX = {
    answer,
    error,
    highscore,
    index,
    points,
    questions,
    secondsRemaining,
    status,
    numOfQuestions,
    maxPoints,
    startQuiz,
    chooseAnswer,
    resetQuiz,
    nextQuestion,
    finishQuiz,
    startTimer,
  }

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch('http://localhost:3001/questions')
        const data = (await res.json()) as Question[]

        if (!res.ok) throw new Error('Cannot fetch data')

        dispatch({ type: 'dataReceived', payload: data })
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)

          dispatch({ type: 'dataFailed', payload: error.message })
        }
      }
    }

    fetchQuestions()
  }, [])

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

const useQuizContext = () => {
  const context = useContext(QuizContext)

  if (!context || context === undefined)
    throw new Error('QuizContext cannot be accessed outside the scope...')

  return context
}

export { QuizContextProvider, useQuizContext }
