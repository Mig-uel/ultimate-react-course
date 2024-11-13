import PropTypes from 'prop-types'
import Friend from './friend'

const FriendsList = ({ friends, onSelect, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          {...friend}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  )
}
export default FriendsList
FriendsList.propTypes = {
  friends: PropTypes.array,
  onSelect: PropTypes.func,
  selectedFriend: PropTypes.object,
}
