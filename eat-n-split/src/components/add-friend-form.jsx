import PropTypes from 'prop-types'
import Button from './button'
import { useState } from 'react'

const AddFriendForm = ({ addFriendHandler }) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState(`https://robohash.org/${Date.now()}`)

  const addFriend = (e) => {
    e.preventDefault()

    if (!name || !image) return

    const friend = {
      id: crypto.randomUUID(),
      name,
      image,
      balance: 0,
    }

    addFriendHandler(friend)

    setName('')
    setImage(`https://robohash.org/${Date.now()}`)
  }

  return (
    <form className='form-add-friend' onSubmit={addFriend}>
      <label>🧑Friend Name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼️ Image URL</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add Friend</Button>
    </form>
  )
}

export default AddFriendForm
AddFriendForm.propTypes = {
  addFriendHandler: PropTypes.func,
}
