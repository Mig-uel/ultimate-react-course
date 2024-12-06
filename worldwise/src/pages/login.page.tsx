import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuthContext } from '../context/AuthContext'
import { Button, Message, Nav } from '../components'
import styles from '../styles/login.module.css'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { isAuthenticated, login, error } = useAuthContext()

  const handleLogin = () => login(email, password)

  useEffect(() => {
    if (isAuthenticated)
      navigate('/app', {
        replace: true,
      })
  }, [isAuthenticated, navigate])

  return (
    <main className={styles.login}>
      <Nav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {error && <Message message={error} />}

        <div>
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </form>
    </main>
  )
}
