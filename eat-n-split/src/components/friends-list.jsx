import PropTypes from 'prop-types'
import Friend from './friend'

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} {...friend} />
      ))}
    </ul>
  )
}
export default FriendsList
FriendsList.propTypes = {
  friends: PropTypes.array,
}
