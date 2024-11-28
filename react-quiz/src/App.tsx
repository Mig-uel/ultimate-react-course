import { useEffect, useReducer } from 'react'

// components
import {
  ActiveQuestion,
  ErrorMessage,
  FinalScreen,
  Header,
  Loader,
  Main,
  NextButton,
  ProgressBar,
  StartScreen,
} from './components'

import { initialState, reducer } from './reducers/quizReducer'
import type { Question } from './types'

function App() {
  const [{ error, questions, status, index, answer, points }, dispatch] =
    useReducer(reducer, initialState)

  const numOfQuestions = questions.length
  const maxPoints = questions.reduce((acc, curr) => acc + curr.points, 0)

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
            <ProgressBar
              index={index}
              numOfQuestions={numOfQuestions}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />
            <ActiveQuestion
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              numOfQuestions={numOfQuestions}
            />
          </>
        )}

        {status === 'finished' && (
          <FinalScreen maxPoints={maxPoints} points={points} />
        )}
      </Main>
    </div>
  )
}

export default App
