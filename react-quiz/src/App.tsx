import { useEffect, useReducer } from 'react'

import Header from './components/header.component'
import Main from './components/main.component'

import type { Action, Question, State } from './types'

const initialState: State = {
  questions: [],
  status: 'loading',
}
const reducer = (state: State, { type, payload }: Action): State => {
  switch (type) {
    case 'dataReceived':
      return { ...state, questions: payload!, status: 'ready' }
    default: {
      const never: never = type
      throw new Error(`INVALID ACTION TYPE: ${never}`)
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function fetchQuestions<T = []>() {
      try {
        const res = await fetch('http://localhost:3001/questions')
        const data: T = await res.json()

        dispatch({ type: 'dataReceived', payload: data })
      } catch (error) {
        console.log(error)
      }
    }

    fetchQuestions<Question[]>()
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
