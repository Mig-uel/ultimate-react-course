import { useState } from 'react'
import FriendsList from './components/friends-list'
import AddFriendForm from './components/add-friend-form'
import Button from './components/button'

function App() {
  const [friends, setFriends] = useState([
    {
      id: 118836,
      name: 'Clark',
      image: 'https://i.pravatar.cc/48?u=118836',
      balance: -7,
    },
    {
      id: 933372,
      name: 'Sarah',
      image: 'https://i.pravatar.cc/48?u=933372',
      balance: 20,
    },
    {
      id: 499476,
      name: 'Anthony',
      image: 'https://i.pravatar.cc/48?u=499476',
      balance: 0,
    },
  ])

  // Add friend menu
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false)
  const addFriendMenuHandler = () => setIsAddFriendOpen((prev) => !prev)
  // add friends handler
  const addFriendHandler = (friend) => {
    setFriends((prev) => [...prev, friend])
    addFriendMenuHandler()
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} />

        {isAddFriendOpen && (
          <AddFriendForm addFriendHandler={addFriendHandler} />
        )}

        <Button onClick={addFriendMenuHandler}>
          {isAddFriendOpen ? 'Close' : 'Add Friend'}
        </Button>
      </div>
    </div>
  )
}

export default App
