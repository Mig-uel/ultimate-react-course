import { useAuthContext } from '../context/AuthContext'
import styles from '../styles/user.module.css'

function User() {
  const { logout, user } = useAuthContext()

  const handleLogout = () => logout()

  if (!user) return null

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default User

/*
CHALLENGE

4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
