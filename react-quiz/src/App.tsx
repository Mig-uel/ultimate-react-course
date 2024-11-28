import { useEffect, useReducer } from 'react'

import Header from './components/header.component'
import Main from './components/main.component'
import Loader from './components/loader.component'
import ErrorMessage from './components/error-message.component'
import StartScreen from './components/start-screen.component'
import ActiveQuestion from './components/active-question.component'
import NextButton from './components/next-button.component'

import { initialState, reducer } from './reducers/quizReducer'
import type { Question } from './types'

function App() {
  const [{ error, questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  )

  const numOfQuestions = questions.length

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
        {status === 'loading' && <Loader />}
        {status === 'error' && error && <ErrorMessage />}
        {status === 'ready' && (
          <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}

        {status === 'active' && (
          <>
            <ActiveQuestion
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  )
}

export default App
