import { useReducer } from 'react'

type State = {
  count: number
  step: number
}
type Type = 'inc' | 'dec' | 'reset' | 'setCount' | 'setStep'
type Action = {
  type: Type
  payload?: number
}

const initialState: State = {
  count: 0,
  step: 1,
}

const reducer = (state: State, { type, payload }: Action): State => {
  switch (type) {
    case 'inc':
      return { ...state, count: state.count + state.step }
    case 'dec':
      return { ...state, count: state.count - state.step }
    case 'reset':
      return initialState
    case 'setCount':
      return { ...state, count: payload! }
    case 'setStep':
      return { ...state, step: payload! }
    default: {
      const never: never = type

      throw new Error(`Invalid type: ${never}`)
    }
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // This mutates the date object.
  const date = new Date('june 21 2027')
  date.setDate(date.getDate() + state.count)

  // handle inc/dec
  const handleCounterActions = (action: string) => {
    if (action === '+') dispatch({ type: 'inc' })
    else if (action === '-') dispatch({ type: 'dec' })
  }

  const defineCount = function (e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'setCount', payload: Number(e.target.value) })
  }

  const defineStep = function (e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'setStep', payload: Number(e.target.value) })
  }

  const reset = function () {
    dispatch({ type: 'reset' })
  }

  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='1'
          max='10'
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={() => handleCounterActions('-')}>-</button>
        <input value={state.count} onChange={defineCount} />
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
