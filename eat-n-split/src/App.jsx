import { useState } from 'react'
import FriendsList from './components/friends-list'
import AddFriendForm from './components/add-friend-form'
import Button from './components/button'
import SplitBillForm from './components/split-bill-form'

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

  const [selectedFriend, setSelectedFriend] = useState(null)

  // ADD FRIEND MENU
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false)
  const addFriendMenuHandler = () => setIsAddFriendOpen((prev) => !prev)
  // ADD FRIENDS HANDLER
  const addFriendHandler = (friend) => {
    setFriends((prev) => [...prev, friend])
    addFriendMenuHandler()
  }

  // SELECTED FRIEND
  const handleSelectedFriend = (id) => {
    setSelectedFriend((prev) =>
      prev?.id === id ? null : friends.find((friend) => friend.id === id)
    )
    setIsAddFriendOpen(false)
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList
          friends={friends}
          onSelect={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />

        {isAddFriendOpen && (
          <AddFriendForm addFriendHandler={addFriendHandler} />
        )}

        <Button onClick={addFriendMenuHandler}>
          {isAddFriendOpen ? 'Close' : 'Add Friend'}
        </Button>
      </div>

      {selectedFriend && <SplitBillForm selectedFriend={selectedFriend} />}
    </div>
  )
}

export default App
