const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>

      <select>
        {Array.from({ length: 20 }, (curr, index) => index + 1).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>

      <input type='text' placeholder='Item...' />
      <button type='button'>Add</button>
    </form>
  )
}
export default Form
