import { useEffect, useReducer } from 'react'

import Header from './components/header.component'
import Main from './components/main.component'

import type { Question } from './types'

function App() {
  const [state, dispatch] = useReducer()

  useEffect(() => {
    async function fetchQuestions<T = []>() {
      try {
        const res = await fetch('http://localhost:3001/questions')
        const data = (await res.json()) as T

        console.log(data)
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
