import { useState } from 'react'
import { useAppDispatch } from '../hooks'
import { createCustomer } from '../features/customer/customerActions'

function CreateCustomer() {
  const dispatch = useAppDispatch()
  const [fullName, setFullName] = useState('')
  const [nationalID, setNationalID] = useState('')

  function handleClick() {
    if (!fullName || !nationalID) return

    const customer = {
      full_name: fullName,
      nationalID,
    }

    dispatch(createCustomer(customer))
  }

  return (
    <div>
      <h2>Create New customer</h2>
      <div className='inputs'>
        <div>
          <label htmlFor='fullName'>Customer Full Name</label>
          <input
            id='fullName'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='nationalID'>National ID</label>
          <input
            id='nationalID'
            value={nationalID}
            onChange={(e) => setNationalID(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  )
}

export default CreateCustomer
