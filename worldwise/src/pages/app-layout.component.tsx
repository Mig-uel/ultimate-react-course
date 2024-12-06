import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuthContext } from '../context/AuthContext'
import { Map, Sidebar, User } from '../components'
import styles from '../styles/app-layout.module.css'

const AppLayout = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthContext()

  useEffect(() => {
    if (!isAuthenticated) navigate('/login')
  }, [isAuthenticated, navigate])

  return (
    <div className={styles.app}>
      <User />
      <Sidebar />
      <Map />
    </div>
  )
}
export default AppLayout
