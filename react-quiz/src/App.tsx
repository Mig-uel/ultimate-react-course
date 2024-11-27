import { useEffect, useReducer } from 'react'

import Header from './components/header.component'
import Main from './components/main.component'

import type { Action, Question, State } from './types'

const initialState: State = {
  questions: [],
  status: 'loading',
  error: null,
}
const reducer = (state: State, { type, payload }: Action): State => {
  switch (type) {
    case 'dataReceived':
      return { ...state, questions: payload as Question[], status: 'ready' }
    case 'dataFailed':
      return { ...state, status: 'error', error: payload as string }
    default: {
      const never: never = type
      throw new Error(`INVALID ACTION TYPE: ${never}`)
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

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

  return (
    <div className='app'>
      <Header />

      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  )
}

export default App
