import { useEffect } from 'react'
import type { Action } from '../types'

const Timer = ({
  dispatch,
  secondsRemaining,
}: {
  dispatch: React.Dispatch<Action>
  secondsRemaining: number | null
}) => {
  const min = Math.floor(secondsRemaining! / 60)
  const sec = secondsRemaining! % 60

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)

    return () => clearInterval(id)
  }, [dispatch])

  return (
    <div className='timer'>
      {min < 10 && 0}
      {min}:{sec < 10 && 0}
      {sec}
    </div>
  )
}
export default Timer
