type Options = string[]

export type Question = {
  question: string
  options: Options
  correctOption: number
  points: number
  id: string
}

type Type =
  | 'dataReceived'
  | 'dataFailed'
  | 'start'
  | 'newAnswer'
  | 'nextQuestion'
  | 'finish'
  | 'reset'
  | 'tick'

export type Action = {
  type: Type
  payload?: Question[] | string | number
}

type Status = 'loading' | 'error' | 'ready' | 'active' | 'finished'

export type State = {
  questions: Question[]
  status: Status
  error: string | null
  index: number
  answer: number | null
  points: number
  highscore: number
  secondsRemaining: number | null
}

/* QUIZ CONTEXT */
export type QuizCTX = State & {
  numOfQuestions: number
  maxPoints: number
  startQuiz: () => void
  chooseAnswer: (index: number) => void
  resetQuiz: () => void
  nextQuestion: () => void
  finishQuiz: () => void
  startTimer: () => void
}
