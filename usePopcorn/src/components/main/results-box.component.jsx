import { useState } from 'react'

const ResultsBox = ({ children }) => {
  const [isOpen1, setIsOpen1] = useState(true)

  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? '–' : '+'}
      </button>

      {/* MOVIE LIST */}
      {isOpen1 && children}
    </div>
  )
}
export default ResultsBox
