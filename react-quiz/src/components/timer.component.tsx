import { useEffect } from 'react'
import { useQuizContext } from '../context/QuizContext'

const Timer = () => {
  const { secondsRemaining, startTimer } = useQuizContext()

  const min = Math.floor(secondsRemaining! / 60)
  const sec = secondsRemaining! % 60

  useEffect(() => {
    const id = setInterval(startTimer, 1000)

    return () => clearInterval(id)
  }, [startTimer])

  return (
    <div className='timer'>
      {min < 10 && 0}
      {min}:{sec < 10 && 0}
      {sec}
    </div>
  )
}
export default Timer
