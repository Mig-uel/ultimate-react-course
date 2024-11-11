import { useState } from 'react'
import FriendsList from './components/friends-list'

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
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} />
      </div>
    </div>
  )
}

export default App