import type { Action, Question, State } from '../types'

export const initialState: State = {
  questions: [],
  status: 'loading',
  error: null,
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 5,
}

export const reducer = (state: State, { type, payload }: Action): State => {
  switch (type) {
    case 'dataReceived':
      return {
        ...state,
        questions: payload as Question[],
        status: 'ready',
        error: null,
      }
    case 'dataFailed':
      return { ...state, status: 'error', error: payload as string }
    case 'start':
      return { ...state, status: 'active' }
    case 'newAnswer': {
      const currentQuestion = state.questions[state.index]

      return {
        ...state,
        answer: payload as number,
        points:
          payload === currentQuestion.correctOption
            ? state.points + currentQuestion.points
            : state.points,
      }
    }
    case 'nextQuestion': {
      return { ...state, index: state.index + 1, answer: null }
    }
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      }
    case 'reset':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
        highscore: state.highscore,
      }
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      }
    default: {
      const never: never = type
      throw new Error(`INVALID ACTION TYPE: ${never}`)
    }
  }
}
