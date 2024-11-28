type Options = string[]

export type Question = {
  question: string
  options: Options
  correctOption: number
  points: number
  id: string
}

type Type = 'dataReceived' | 'dataFailed' | 'start' | 'newAnswer'

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
}
