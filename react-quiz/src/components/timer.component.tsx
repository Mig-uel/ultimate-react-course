import { useEffect } from 'react'
import type { Action } from '../types'

const Timer = ({
  dispatch,
  secondsRemaining,
}: {
  dispatch: React.Dispatch<Action>
  secondsRemaining: number
}) => {
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)

    return () => clearInterval(id)
  }, [dispatch])

  return <div className='timer'>{secondsRemaining}</div>
}
export default Timer
