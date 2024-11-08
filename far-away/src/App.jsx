import { useState } from 'react'

const messages = [
  'Learn React 🧪',
  'Apply for Jobs 💼',
  'Invest your new income 🤑',
]

function App() {
  const [isOpen, setIsOpen] = useState(true)
  const [step, setStep] = useState(1)

  const handleClick = (action) => {
    if (action === 'previous')
      setStep((prev) => (prev - 1 > 0 ? prev - 1 : prev))
    else setStep((prev) => (prev + 1 < 4 ? prev + 1 : prev))
  }

  const handleMenuClick = () => setIsOpen((prev) => !prev)

  return (
    <>
      <button className='close' onClick={handleMenuClick}>
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={`${step === 1 ? 'active' : ''}`}>1</div>
            <div className={`${step === 2 ? 'active' : ''}`}>2</div>
            <div className={`${step === 3 ? 'active' : ''}`}>3</div>
          </div>

          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>

          <div className='buttons'>
            <button
              style={{
                backgroundColor: '#7950F2',
                color: 'white',
              }}
              onClick={() => handleClick('previous')}
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: '#7950F2',
                color: 'white',
              }}
              onClick={() => handleClick('next')}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
