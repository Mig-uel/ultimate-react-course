import { useReducer, useState } from 'react'

type State = number
type Type = 'inc' | 'dec' | 'reset' | 'setCount'
type Action = {
  type: Type
  payload?: number
}

const initialState: State = 0
const reducer = (state: State, { type, payload }: Action): State => {
  switch (type) {
    case 'inc':
      return state + payload!
    case 'dec':
      return state - payload!
    case 'reset':
      return 0
    case 'setCount':
      return payload!
    default: {
      const never: never = type

      throw new Error(`Invalid type: ${never}`)
    }
  }
}

function DateCounter() {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [step, setStep] = useState(1)

  // This mutates the date object.
  const date = new Date('june 21 2027')
  date.setDate(date.getDate() + count)

  // handle inc/dec
  const handleCounterActions = (action: string) => {
    if (action === '+') dispatch({ type: 'inc', payload: 1 })
    else if (action === '-') dispatch({ type: 'dec', payload: -1 })
  }

  const defineCount = function (e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'setCount', payload: Number(e.target.value) })
  }

  const defineStep = function (e: React.ChangeEvent<HTMLInputElement>) {
    setStep(Number(e.target.value))
  }

  const reset = function () {
    dispatch({ type: 'reset' })
  }

  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => handleCounterActions('-')}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={() => handleCounterActions('+')}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
export default DateCounter
