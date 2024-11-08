const messages = [
  'Learn React 🧪',
  'Apply for Jobs 💼',
  'Invest your new income 🤑',
]

function App() {
  const step = 1

  const handleClick = (action) => {
    if (action === 'previous') {
    } else {
    }
  }

  return (
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
  )
}

export default App
